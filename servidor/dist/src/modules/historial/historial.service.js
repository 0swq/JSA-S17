"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historialServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const historial_repository_1 = require("./historial.repository");
exports.historialServicio = {
    obtenerTodos(filtros = {}) {
        return historial_repository_1.historialRepositorio.obtenerTodos(filtros);
    },
    async obtenerPorId(id) {
        const registro = await historial_repository_1.historialRepositorio.obtenerPorId(id);
        if (!registro)
            throw ApiError_1.ApiError.noEncontrado('Registro de historial no encontrado');
        return registro;
    },
    crear(data) {
        return historial_repository_1.historialRepositorio.crear(data);
    },
};
//# sourceMappingURL=historial.service.js.map