"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.autorRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.autor.findMany({
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.autor.findUnique({
            where: { id },
            include: { libros: { include: { libro: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.autor.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.autor.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.autor.delete({ where: { id } });
    },
};
//# sourceMappingURL=autor.repository.js.map