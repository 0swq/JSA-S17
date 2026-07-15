"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservaControlador = void 0;
const reserva_service_1 = require("./reserva.service");
exports.reservaControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const reservas = await reserva_service_1.reservaServicio.obtenerTodos(req.query);
            res.json({ success: true, data: reservas });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const reserva = await reserva_service_1.reservaServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: reserva });
        }
        catch (error) {
            next(error);
        }
    },
    async misReservas(req, res, next) {
        try {
            const reservas = await reserva_service_1.reservaServicio.obtenerPorUsuario(req.usuario.id);
            res.json({ success: true, data: reservas });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const reserva = await reserva_service_1.reservaServicio.crear({
                ...req.body,
                usuarioId: req.usuario.id,
            });
            res.status(201).json({ success: true, data: reserva });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const reserva = await reserva_service_1.reservaServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: reserva });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await reserva_service_1.reservaServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Reserva eliminada correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=reserva.controller.js.map