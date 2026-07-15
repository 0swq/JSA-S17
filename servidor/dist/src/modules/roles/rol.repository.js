"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.rolRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.rol.findMany({
            include: { usuarios: true },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.rol.findUnique({
            where: { id },
            include: { usuarios: true },
        });
    },
    crear(data) {
        return prisma_1.prisma.rol.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.rol.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.rol.delete({ where: { id } });
    },
};
//# sourceMappingURL=rol.repository.js.map