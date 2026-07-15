"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.categoriaRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.categoria.findMany({
            include: { subcategorias: true },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.categoria.findUnique({
            where: { id },
            include: { subcategorias: true, libros: { include: { libro: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.categoria.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.categoria.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.categoria.delete({ where: { id } });
    },
};
//# sourceMappingURL=categoria.repository.js.map