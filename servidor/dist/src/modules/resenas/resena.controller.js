"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resenaControlador = void 0;
const resena_service_1 = require("./resena.service");
exports.resenaControlador = {
    async obtenerPorLibro(req, res, next) {
        try {
            const resenas = await resena_service_1.resenaServicio.obtenerPorLibro(req.params.libroId);
            res.json({ success: true, data: resenas });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const usuario = req.usuario;
            const resena = await resena_service_1.resenaServicio.obtenerPorId(req.params.id, usuario.id, usuario.rol.nombre);
            res.json({ success: true, data: resena });
        }
        catch (error) {
            next(error);
        }
    },
    async misResenas(req, res, next) {
        try {
            const resenas = await resena_service_1.resenaServicio.obtenerPorUsuario(req.usuario.id);
            res.json({ success: true, data: resenas });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const usuario = req.usuario;
            const resena = await resena_service_1.resenaServicio.crear({
                ...req.body,
                usuarioId: usuario.id,
            });
            res.status(201).json({ success: true, data: resena });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const usuario = req.usuario;
            const resena = await resena_service_1.resenaServicio.actualizar(req.params.id, usuario.id, req.body);
            res.json({ success: true, data: resena });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            const usuario = req.usuario;
            await resena_service_1.resenaServicio.eliminar(req.params.id, usuario.id, usuario.rol.nombre);
            res.json({ success: true, mensaje: 'Reseña eliminada correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=resena.controller.js.map