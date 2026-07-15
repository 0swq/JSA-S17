"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejemplarControlador = void 0;
const ejemplar_service_1 = require("./ejemplar.service");
exports.ejemplarControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const ejemplares = await ejemplar_service_1.ejemplarServicio.obtenerTodos();
            res.json({ success: true, data: ejemplares });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorLibro(req, res, next) {
        try {
            const ejemplares = await ejemplar_service_1.ejemplarServicio.obtenerPorLibro(req.params.libroId);
            res.json({ success: true, data: ejemplares });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const ejemplar = await ejemplar_service_1.ejemplarServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: ejemplar });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const ejemplar = await ejemplar_service_1.ejemplarServicio.crear(req.body);
            res.status(201).json({ success: true, data: ejemplar });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const ejemplar = await ejemplar_service_1.ejemplarServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: ejemplar });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await ejemplar_service_1.ejemplarServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Ejemplar eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=ejemplar.controller.js.map