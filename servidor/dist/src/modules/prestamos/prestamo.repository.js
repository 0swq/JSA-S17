"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestamoRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.prestamoRepositorio = {
    obtenerTodos(filtros = {}) {
        const where = {};
        if (filtros.estado)
            where.estado = filtros.estado;
        if (filtros.usuarioId)
            where.usuarioId = filtros.usuarioId;
        if (filtros.ejemplarId)
            where.ejemplarId = filtros.ejemplarId;
        return prisma_1.prisma.prestamo.findMany({
            where,
            include: {
                usuario: { select: { id: true, nombre: true, apellidos: true, correo: true, dni: true } },
                ejemplar: { include: { libro: { select: { id: true, titulo: true, fotoUrl: true } } } },
                multa: true,
            },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorUsuario(usuarioId) {
        return prisma_1.prisma.prestamo.findMany({
            where: { usuarioId },
            include: {
                ejemplar: { include: { libro: { select: { id: true, titulo: true } } } },
                multa: true,
            },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.prestamo.findUnique({
            where: { id },
            include: {
                usuario: { select: { id: true, nombre: true, apellidos: true, correo: true, dni: true } },
                ejemplar: {
                    include: {
                        libro: {
                            select: {
                                id: true,
                                titulo: true,
                                fotoUrl: true,
                                autores: { include: { autor: { select: { nombre: true, apellidos: true } } } },
                            },
                        },
                    },
                },
                multa: true,
            },
        });
    },
    crear(data) {
        return prisma_1.prisma.prestamo.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.prestamo.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.prestamo.delete({ where: { id } });
    },
};
//# sourceMappingURL=prestamo.repository.js.map