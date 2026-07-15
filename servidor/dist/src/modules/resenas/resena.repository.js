"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resenaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.resenaRepositorio = {
    obtenerPorLibro(libroId) {
        return prisma_1.prisma.resena.findMany({
            where: { libroId },
            include: { usuario: { select: { id: true, nombre: true, apellidos: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorUsuario(usuarioId) {
        return prisma_1.prisma.resena.findMany({
            where: { usuarioId },
            include: { libro: { select: { id: true, titulo: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.resena.findUnique({
            where: { id },
            include: {
                usuario: { select: { id: true, nombre: true, apellidos: true } },
                libro: { select: { id: true, titulo: true } },
            },
        });
    },
    crear(data) {
        return prisma_1.prisma.resena.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.resena.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.resena.delete({ where: { id } });
    },
};
//# sourceMappingURL=resena.repository.js.map