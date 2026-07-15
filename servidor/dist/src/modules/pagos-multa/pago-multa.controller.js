"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagoMultaControlador = void 0;
const pago_multa_service_1 = require("./pago-multa.service");
exports.pagoMultaControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const pagos = await pago_multa_service_1.pagoMultaServicio.obtenerTodos();
            res.json({ success: true, data: pagos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorMulta(req, res, next) {
        try {
            const pagos = await pago_multa_service_1.pagoMultaServicio.obtenerPorMulta(req.params.multaId);
            res.json({ success: true, data: pagos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const pago = await pago_multa_service_1.pagoMultaServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: pago });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const pago = await pago_multa_service_1.pagoMultaServicio.crear(req.body);
            res.status(201).json({ success: true, data: pago });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const pago = await pago_multa_service_1.pagoMultaServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: pago });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await pago_multa_service_1.pagoMultaServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Pago eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=pago-multa.controller.js.map