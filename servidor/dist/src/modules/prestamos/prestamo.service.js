"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestamoServicio = void 0;
const ApiError_1 = require("@utils/ApiError");
const prisma_1 = require("../prisma");
const prestamo_repository_1 = require("./prestamo.repository");
exports.prestamoServicio = {
    obtenerTodos(filtros = {}) {
        return prestamo_repository_1.prestamoRepositorio.obtenerTodos(filtros);
    },
    obtenerPorUsuario(usuarioId) {
        return prestamo_repository_1.prestamoRepositorio.obtenerPorUsuario(usuarioId);
    },
    async obtenerPorId(id, usuarioId, rol) {
        const prestamo = await prestamo_repository_1.prestamoRepositorio.obtenerPorId(id);
        if (!prestamo)
            throw ApiError_1.ApiError.noEncontrado("Préstamo no encontrado");
        if (rol === 'docente' || rol === 'estudiante') {
            if (prestamo.usuarioId !== usuarioId) {
                throw ApiError_1.ApiError.noAutorizado('No puedes ver préstamos de otros usuarios');
            }
        }
        return prestamo;
    },
    async crear(data) {
        // Transacción: crear préstamo y cambiar estado del ejemplar a "prestado"
        const [prestamo, ejemplarUpdate] = await prisma_1.prisma.$transaction([
            prisma_1.prisma.prestamo.create({ data }),
            prisma_1.prisma.ejemplar.updateMany({
                where: { id: data.ejemplarId, estado: 'disponible' },
                data: { estado: 'prestado' },
            }),
        ]);
        if (ejemplarUpdate.count === 0) {
            throw ApiError_1.ApiError.conflicto('El ejemplar ya no está disponible para préstamo');
        }
        return prestamo;
    },
    async actualizar(id, data) {
        const prestamo = await prestamo_repository_1.prestamoRepositorio.obtenerPorId(id);
        if (!prestamo)
            throw ApiError_1.ApiError.noEncontrado('Préstamo no encontrado');
        // Si el préstamo se devuelve (fechaDevolucion o estado "devuelto"), liberar el ejemplar
        const esDevolucion = data.fechaDevolucion || data.estado === 'devuelto';
        if (esDevolucion) {
            const updateData = { ...data };
            if (data.fechaDevolucion && !data.estado) {
                updateData.estado = 'devuelto';
            }
            const [actualizado] = await prisma_1.prisma.$transaction([
                prisma_1.prisma.prestamo.update({ where: { id }, data: updateData }),
                prisma_1.prisma.ejemplar.update({
                    where: { id: prestamo.ejemplarId },
                    data: { estado: 'disponible' },
                }),
            ]);
            return actualizado;
        }
        return prestamo_repository_1.prestamoRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        const prestamo = await prestamo_repository_1.prestamoRepositorio.obtenerPorId(id);
        if (!prestamo)
            throw ApiError_1.ApiError.noEncontrado('Préstamo no encontrado');
        // Al eliminar, liberar el ejemplar
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.prestamo.delete({ where: { id } }),
            prisma_1.prisma.ejemplar.update({
                where: { id: prestamo.ejemplarId },
                data: { estado: 'disponible' },
            }),
        ]);
    },
};
//# sourceMappingURL=prestamo.service.js.map