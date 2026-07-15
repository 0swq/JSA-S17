"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.reservaRepositorio = {
    obtenerTodos(filtros = {}) {
        const where = {};
        if (filtros.estado)
            where.estado = filtros.estado;
        if (filtros.usuarioId)
            where.usuarioId = filtros.usuarioId;
        if (filtros.libroId)
            where.libroId = filtros.libroId;
        return prisma_1.prisma.reserva.findMany({
            where,
            include: { usuario: { select: { id: true, nombre: true, apellidos: true, correo: true } }, libro: { select: { id: true, titulo: true } }, ejemplar: { select: { id: true, codigoBarras: true, estado: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    contarActivasPorUsuario(usuarioId) {
        return prisma_1.prisma.reserva.count({
            where: { usuarioId, estado: { in: ['pendiente', 'activa'] } },
        });
    },
    obtenerPorUsuario(usuarioId) {
        return prisma_1.prisma.reserva.findMany({
            where: { usuarioId },
            include: { libro: { select: { id: true, titulo: true } }, ejemplar: { select: { id: true, codigoBarras: true, estado: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.reserva.findUnique({
            where: { id },
            include: { usuario: { select: { id: true, nombre: true, apellidos: true, correo: true } }, libro: { select: { id: true, titulo: true } }, ejemplar: { select: { id: true, codigoBarras: true, estado: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.reserva.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.reserva.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.reserva.delete({ where: { id } });
    },
};
//# sourceMappingURL=reserva.repository.js.map