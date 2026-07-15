"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorialRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.editorialRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.editorial.findMany({
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.editorial.findUnique({
            where: { id },
            include: { libros: true },
        });
    },
    crear(data) {
        return prisma_1.prisma.editorial.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.editorial.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.editorial.delete({ where: { id } });
    },
};
//# sourceMappingURL=editorial.repository.js.map