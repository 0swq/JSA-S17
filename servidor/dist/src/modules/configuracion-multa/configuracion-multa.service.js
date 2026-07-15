"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracionMultaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const configuracion_multa_repository_1 = require("./configuracion-multa.repository");
exports.configuracionMultaServicio = {
    obtener() {
        return configuracion_multa_repository_1.configuracionMultaRepositorio.obtener();
    },
    async obtenerPorId(id) {
        const config = await configuracion_multa_repository_1.configuracionMultaRepositorio.obtenerPorId(id);
        if (!config)
            throw ApiError_1.ApiError.noEncontrado('Configuración no encontrada');
        return config;
    },
    crear(data) {
        return configuracion_multa_repository_1.configuracionMultaRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return configuracion_multa_repository_1.configuracionMultaRepositorio.actualizar(id, data);
    },
};
//# sourceMappingURL=configuracion-multa.service.js.map