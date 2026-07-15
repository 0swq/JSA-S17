"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagoMultaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const pago_multa_repository_1 = require("./pago-multa.repository");
exports.pagoMultaServicio = {
    obtenerTodos() {
        return pago_multa_repository_1.pagoMultaRepositorio.obtenerTodos();
    },
    obtenerPorMulta(multaId) {
        return pago_multa_repository_1.pagoMultaRepositorio.obtenerPorMulta(multaId);
    },
    async obtenerPorId(id) {
        const pago = await pago_multa_repository_1.pagoMultaRepositorio.obtenerPorId(id);
        if (!pago)
            throw ApiError_1.ApiError.noEncontrado('Pago de multa no encontrado');
        return pago;
    },
    crear(data) {
        return pago_multa_repository_1.pagoMultaRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return pago_multa_repository_1.pagoMultaRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await pago_multa_repository_1.pagoMultaRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=pago-multa.service.js.map