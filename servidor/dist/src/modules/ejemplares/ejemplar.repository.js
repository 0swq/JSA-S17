"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejemplarRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.ejemplarRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.ejemplar.findMany({
            include: { libro: { select: { id: true, titulo: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorLibro(libroId) {
        return prisma_1.prisma.ejemplar.findMany({
            where: { libroId },
            include: { libro: { select: { id: true, titulo: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.ejemplar.findUnique({
            where: { id },
            include: { libro: { select: { id: true, titulo: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.ejemplar.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.ejemplar.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.ejemplar.delete({ where: { id } });
    },
};
//# sourceMappingURL=ejemplar.repository.js.map