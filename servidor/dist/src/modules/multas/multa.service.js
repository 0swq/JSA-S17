"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const multa_repository_1 = require("./multa.repository");
exports.multaServicio = {
    obtenerTodos(filtros = {}) {
        return multa_repository_1.multaRepositorio.obtenerTodos(filtros);
    },
    async obtenerPorId(id) {
        const multa = await multa_repository_1.multaRepositorio.obtenerPorId(id);
        if (!multa)
            throw ApiError_1.ApiError.noEncontrado('Multa no encontrada');
        return multa;
    },
    obtenerPorUsuario(usuarioId) {
        return multa_repository_1.multaRepositorio.obtenerPorUsuario(usuarioId);
    },
    crear(data) {
        return multa_repository_1.multaRepositorio.crear(data);
    },
    async actualizar(id, data) {
        if (!await multa_repository_1.multaRepositorio.obtenerPorId(id))
            throw ApiError_1.ApiError.noEncontrado('Multa no encontrada');
        return multa_repository_1.multaRepositorio.actualizar(id, data);
    },
};
//# sourceMappingURL=multa.service.js.map