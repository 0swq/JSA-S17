"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const prisma_1 = require("../prisma");
const reserva_repository_1 = require("./reserva.repository");
const LIMITE = 3;
exports.reservaServicio = {
    obtenerTodos(filtros = {}) {
        return reserva_repository_1.reservaRepositorio.obtenerTodos(filtros);
    },
    async obtenerPorId(id) {
        const reserva = await reserva_repository_1.reservaRepositorio.obtenerPorId(id);
        if (!reserva)
            throw ApiError_1.ApiError.noEncontrado('Reserva no encontrada');
        return reserva;
    },
    obtenerPorUsuario(usuarioId) {
        return reserva_repository_1.reservaRepositorio.obtenerPorUsuario(usuarioId);
    },
    async crear(data) {
        const activas = await reserva_repository_1.reservaRepositorio.contarActivasPorUsuario(data.usuarioId);
        if (activas >= LIMITE) {
            throw ApiError_1.ApiError.conflicto(`Has alcanzado el límite de ${LIMITE} reservas activas`);
        }
        // Transacción: crear reserva y cambiar estado del ejemplar a "reservado"
        const [reserva, ejemplarUpdate] = await prisma_1.prisma.$transaction([
            prisma_1.prisma.reserva.create({ data }),
            prisma_1.prisma.ejemplar.updateMany({
                where: { id: data.ejemplarId, estado: 'disponible' },
                data: { estado: 'reservado' },
            }),
        ]);
        if (ejemplarUpdate.count === 0) {
            throw ApiError_1.ApiError.conflicto('El ejemplar ya no está disponible para reservar');
        }
        return reserva;
    },
    async actualizar(id, data) {
        const reserva = await reserva_repository_1.reservaRepositorio.obtenerPorId(id);
        if (!reserva)
            throw ApiError_1.ApiError.noEncontrado('Reserva no encontrada');
        // Si la reserva se completa, cancela o expira, liberar el ejemplar
        if (data.estado && ['completada', 'cancelada', 'expirada'].includes(data.estado)) {
            const [actualizada] = await prisma_1.prisma.$transaction([
                prisma_1.prisma.reserva.update({ where: { id }, data }),
                prisma_1.prisma.ejemplar.update({
                    where: { id: reserva.ejemplarId },
                    data: { estado: 'disponible' },
                }),
            ]);
            return actualizada;
        }
        return reserva_repository_1.reservaRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        const reserva = await reserva_repository_1.reservaRepositorio.obtenerPorId(id);
        if (!reserva)
            throw ApiError_1.ApiError.noEncontrado('Reserva no encontrada');
        // Al eliminar, liberar el ejemplar
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.reserva.delete({ where: { id } }),
            prisma_1.prisma.ejemplar.update({
                where: { id: reserva.ejemplarId },
                data: { estado: 'disponible' },
            }),
        ]);
    },
};
//# sourceMappingURL=reserva.service.js.map