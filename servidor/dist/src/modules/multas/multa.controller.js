"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multaControlador = void 0;
const multa_service_1 = require("./multa.service");
exports.multaControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const multas = await multa_service_1.multaServicio.obtenerTodos(req.query);
            res.json({ success: true, data: multas });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const usuario = req.usuario;
            const multa = await multa_service_1.multaServicio.obtenerPorId(req.params.id, usuario.id, usuario.rol.nombre);
            res.json({ success: true, data: multa });
        }
        catch (error) {
            next(error);
        }
    },
    async misMultas(req, res, next) {
        try {
            const multas = await multa_service_1.multaServicio.obtenerPorUsuario(req.usuario.id);
            res.json({ success: true, data: multas });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const multa = await multa_service_1.multaServicio.crear(req.body);
            res.status(201).json({ success: true, data: multa });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const multa = await multa_service_1.multaServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: multa });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await multa_service_1.multaServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Multa eliminada correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=multa.controller.js.map