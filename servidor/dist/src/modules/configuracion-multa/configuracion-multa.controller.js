"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracionMultaControlador = void 0;
const configuracion_multa_service_1 = require("./configuracion-multa.service");
exports.configuracionMultaControlador = {
    async obtener(req, res, next) {
        try {
            const config = await configuracion_multa_service_1.configuracionMultaServicio.obtener();
            res.json({ success: true, data: config });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const config = await configuracion_multa_service_1.configuracionMultaServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: config });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const config = await configuracion_multa_service_1.configuracionMultaServicio.crear(req.body);
            res.status(201).json({ success: true, data: config });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const config = await configuracion_multa_service_1.configuracionMultaServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: config });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=configuracion-multa.controller.js.map