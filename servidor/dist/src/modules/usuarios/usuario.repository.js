"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.usuarioRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.usuario.findMany({
            omit: { passwordHash: true },
            include: { rol: true },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.usuario.findUnique({
            where: { id },
            omit: { passwordHash: true },
            include: { rol: true },
        });
    },
    obtenerPorCorreoConHash(correo) {
        return prisma_1.prisma.usuario.findUnique({
            where: { correo },
            include: { rol: true },
        });
    },
    obtenerRolPorNombre(nombre) {
        return prisma_1.prisma.rol.findUnique({ where: { nombre } });
    },
    crear(data) {
        return prisma_1.prisma.usuario.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.usuario.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.usuario.delete({ where: { id } });
    },
};
//# sourceMappingURL=usuario.repository.js.map