"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.multaRepositorio = {
    obtenerTodos(filtros = {}) {
        const where = {};
        if (filtros.estado)
            where.estado = filtros.estado;
        if (filtros.usuarioId) {
            where.prestamo = { usuarioId: filtros.usuarioId };
        }
        return prisma_1.prisma.multa.findMany({
            where,
            include: {
                prestamo: {
                    include: {
                        ejemplar: { include: { libro: { select: { id: true, titulo: true } } } },
                        usuario: { select: { id: true, nombre: true, apellidos: true, correo: true } },
                    },
                },
                pagos: true,
            },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorUsuario(usuarioId) {
        return prisma_1.prisma.multa.findMany({
            where: {
                prestamo: { usuarioId },
            },
            include: {
                prestamo: {
                    include: {
                        ejemplar: { include: { libro: { select: { id: true, titulo: true } } } },
                        usuario: { select: { id: true, nombre: true, apellidos: true, correo: true } },
                    },
                },
                pagos: true,
            },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.multa.findUnique({
            where: { id },
            include: {
                prestamo: {
                    include: {
                        ejemplar: {
                            include: {
                                libro: {
                                    include: {
                                        editorial: { select: { id: true, nombre: true } },
                                        autores: { include: { autor: { select: { id: true, nombre: true, apellidos: true } } } },
                                        categorias: { include: { categoria: { select: { id: true, nombre: true } } } },
                                    },
                                },
                            },
                        },
                        usuario: { select: { id: true, nombre: true, apellidos: true, correo: true, dni: true } },
                    },
                },
                pagos: true,
            },
        });
    },
    crear(data) {
        return prisma_1.prisma.multa.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.multa.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.multa.delete({ where: { id } });
    },
};
//# sourceMappingURL=multa.repository.js.map