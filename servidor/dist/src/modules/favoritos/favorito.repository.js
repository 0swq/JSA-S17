"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritoRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.favoritoRepositorio = {
    obtenerPorUsuario(usuarioId) {
        return prisma_1.prisma.favorito.findMany({
            where: { usuarioId },
            include: { libro: { select: { id: true, titulo: true, isbn: true } } },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.favorito.findUnique({
            where: { id },
            include: { libro: { select: { id: true, titulo: true, isbn: true } } },
        });
    },
    crear(data) {
        return prisma_1.prisma.favorito.create({ data });
    },
    eliminar(id) {
        return prisma_1.prisma.favorito.delete({ where: { id } });
    },
};
//# sourceMappingURL=favorito.repository.js.map