"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejemplarServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const ejemplar_repository_1 = require("./ejemplar.repository");
exports.ejemplarServicio = {
    obtenerTodos() {
        return ejemplar_repository_1.ejemplarRepositorio.obtenerTodos();
    },
    obtenerPorLibro(libroId) {
        return ejemplar_repository_1.ejemplarRepositorio.obtenerPorLibro(libroId);
    },
    async obtenerPorId(id) {
        const ejemplar = await ejemplar_repository_1.ejemplarRepositorio.obtenerPorId(id);
        if (!ejemplar)
            throw ApiError_1.ApiError.noEncontrado('Ejemplar no encontrado');
        return ejemplar;
    },
    crear(data) {
        return ejemplar_repository_1.ejemplarRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return ejemplar_repository_1.ejemplarRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await ejemplar_repository_1.ejemplarRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=ejemplar.service.js.map