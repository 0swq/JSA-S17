"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historialControlador = void 0;
const historial_service_1 = require("./historial.service");
exports.historialControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const { hechoPorId, modulo, nombreAccion, accion, buscar, desde, hasta } = req.query;
            const filtros = {};
            if (hechoPorId)
                filtros.hechoPorId = hechoPorId;
            if (modulo)
                filtros.modulo = modulo;
            if (nombreAccion)
                filtros.nombreAccion = nombreAccion;
            if (accion)
                filtros.accion = accion;
            if (buscar)
                filtros.buscar = buscar;
            if (desde)
                filtros.desde = new Date(desde);
            if (hasta)
                filtros.hasta = new Date(hasta);
            const registros = await historial_service_1.historialServicio.obtenerTodos(filtros);
            res.json({ success: true, data: registros });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const id = req.params.id;
            const registro = await historial_service_1.historialServicio.obtenerPorId(id);
            res.json({ success: true, data: registro });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const registro = await historial_service_1.historialServicio.crear(req.body);
            res.status(201).json({ success: true, data: registro });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=historial.controller.js.map