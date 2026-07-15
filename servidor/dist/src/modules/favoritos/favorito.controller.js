"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritoControlador = void 0;
const favorito_service_1 = require("./favorito.service");
exports.favoritoControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const favoritos = await favorito_service_1.favoritoServicio.obtenerTodos(req.query);
            res.json({ success: true, data: favoritos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorUsuario(req, res, next) {
        try {
            const favoritos = await favorito_service_1.favoritoServicio.obtenerPorUsuario(req.params.usuarioId);
            res.json({ success: true, data: favoritos });
        }
        catch (error) {
            next(error);
        }
    },
    async misFavoritos(req, res, next) {
        try {
            const favoritos = await favorito_service_1.favoritoServicio.obtenerPorUsuario(req.usuario.id);
            res.json({ success: true, data: favoritos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const favorito = await favorito_service_1.favoritoServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: favorito });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const favorito = await favorito_service_1.favoritoServicio.crear(req.body);
            res.status(201).json({ success: true, data: favorito });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const favorito = await favorito_service_1.favoritoServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: favorito });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await favorito_service_1.favoritoServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Favorito eliminad correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=favorito.controller.js.map