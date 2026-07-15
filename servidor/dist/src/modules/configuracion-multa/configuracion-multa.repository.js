"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracionMultaRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.configuracionMultaRepositorio = {
    obtener() {
        return prisma_1.prisma.configuracionMulta.findFirst({
            orderBy: { creadoEn: 'desc' },
        });
    },
    obtenerPorId(id) {
        return prisma_1.prisma.configuracionMulta.findUnique({ where: { id } });
    },
    crear(data) {
        return prisma_1.prisma.configuracionMulta.create({ data });
    },
    actualizar(id, data) {
        return prisma_1.prisma.configuracionMulta.update({ where: { id }, data });
    },
};
//# sourceMappingURL=configuracion-multa.repository.js.map