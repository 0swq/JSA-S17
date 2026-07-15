"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursoDigitalRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.recursoDigitalRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.recursoDigital.findMany({
            include: { libro: { select: { id: true, titulo: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorLibro(libroId) {
        return prisma_1.prisma.recursoDigital.findMany({
            where: { libroId },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.recursoDigital.findUnique({
            where: { id },
            include: { libro: { select: { id: true, titulo: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.recursoDigital.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.recursoDigital.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.recursoDigital.delete({ where: { id } });
    },
};
//# sourceMappingURL=recurso-digital.repository.js.map