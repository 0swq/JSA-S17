"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestamoControlador = void 0;
const prestamo_service_1 = require("./prestamo.service");
exports.prestamoControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const prestamos = await prestamo_service_1.prestamoServicio.obtenerTodos(req.query);
            res.json({ success: true, data: prestamos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const usuario = req.usuario;
            const prestamo = await prestamo_service_1.prestamoServicio.obtenerPorId(req.params.id, usuario.id, usuario.rol.nombre);
            res.json({ success: true, data: prestamo });
        }
        catch (error) {
            next(error);
        }
    },
    async misPrestamos(req, res, next) {
        try {
            const prestamos = await prestamo_service_1.prestamoServicio.obtenerPorUsuario(req.usuario.id);
            res.json({ success: true, data: prestamos });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const prestamo = await prestamo_service_1.prestamoServicio.crear(req.body);
            res.status(201).json({ success: true, data: prestamo });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const prestamo = await prestamo_service_1.prestamoServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: prestamo });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await prestamo_service_1.prestamoServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Préstamo eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=prestamo.controller.js.map