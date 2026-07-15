"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagoMultaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.pagoMultaRepositorio = {
    obtenerTodos() {
        return prisma_1.prisma.pagoMulta.findMany({
            include: {
                multa: {
                    include: {
                        usuario: { select: { id: true, nombre: true, apellidos: true, correo: true } },
                    },
                },
            },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorMulta(multaId) {
        return prisma_1.prisma.pagoMulta.findMany({
            where: { multaId },
            include: { multa: true },
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.pagoMulta.findUnique({
            where: { id },
            include: { multa: true },
        });
    },
    crear(data) {
        return prisma_1.prisma.pagoMulta.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.pagoMulta.update({ where: { id }, data });
    },
    eliminar(id) {
        return prisma_1.prisma.pagoMulta.delete({ where: { id } });
    },
};
//# sourceMappingURL=pago-multa.repository.js.map