"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historialRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.historialRepositorio = {
    obtenerTodos(filtros = {}) {
        const where = {};
        if (filtros.hechoPorId)
            where.hechoPorId = filtros.hechoPorId;
        if (filtros.modulo)
            where.modulo = filtros.modulo;
        if (filtros.nombreAccion)
            where.nombreAccion = filtros.nombreAccion;
        if (filtros.accion)
            where.accion = filtros.accion;
        if (filtros.buscar) {
            where.OR = [
                { nombreAccion: { contains: filtros.buscar, mode: 'insensitive' } },
                { accion: { contains: filtros.buscar, mode: 'insensitive' } },
                { modulo: { contains: filtros.buscar, mode: 'insensitive' } },
                { hechoPor: { OR: [
                            { nombre: { contains: filtros.buscar, mode: 'insensitive' } },
                            { apellidos: { contains: filtros.buscar, mode: 'insensitive' } },
                            { correo: { contains: filtros.buscar, mode: 'insensitive' } },
                        ] } },
            ];
        }
        if (filtros.desde || filtros.hasta) {
            where.creadoEn = {};
            if (filtros.desde)
                where.creadoEn.gte = filtros.desde;
            if (filtros.hasta)
                where.creadoEn.lte = filtros.hasta;
        }
        return prisma_1.prisma.historial.findMany({
            where,
            include: { hechoPor: { select: { id: true, nombre: true, apellidos: true, correo: true } } },
            orderBy: { creadoEn: 'desc' },
            take: 100,
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.historial.findUnique({
            where: { id },
            include: { hechoPor: { select: { id: true, nombre: true, apellidos: true, correo: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.historial.create({ data });
    },
};
//# sourceMappingURL=historial.repository.js.map