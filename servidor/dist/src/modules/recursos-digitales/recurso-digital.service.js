"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursoDigitalServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const recurso_digital_repository_1 = require("./recurso-digital.repository");
exports.recursoDigitalServicio = {
    obtenerTodos() {
        return recurso_digital_repository_1.recursoDigitalRepositorio.obtenerTodos();
    },
    obtenerPorLibro(libroId) {
        return recurso_digital_repository_1.recursoDigitalRepositorio.obtenerPorLibro(libroId);
    },
    async obtenerPorId(id) {
        const recurso = await recurso_digital_repository_1.recursoDigitalRepositorio.obtenerPorId(id);
        if (!recurso)
            throw ApiError_1.ApiError.noEncontrado('Recurso digital no encontrado');
        return recurso;
    },
    crear(data) {
        return recurso_digital_repository_1.recursoDigitalRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return recurso_digital_repository_1.recursoDigitalRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await recurso_digital_repository_1.recursoDigitalRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=recurso-digital.service.js.map