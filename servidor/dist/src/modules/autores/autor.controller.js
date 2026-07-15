"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorControlador = void 0;
const autor_service_1 = require("./autor.service");
exports.autorControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const autores = await autor_service_1.autorServicio.obtenerTodos();
            res.json({ success: true, data: autores });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const id = req.params.id;
            const autor = await autor_service_1.autorServicio.obtenerPorId(id);
            res.json({ success: true, data: autor });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const autor = await autor_service_1.autorServicio.crear(req.body);
            res.status(201).json({ success: true, data: autor });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const id = req.params.id;
            const autor = await autor_service_1.autorServicio.actualizar(id, req.body);
            res.json({ success: true, data: autor });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            const id = req.params.id;
            await autor_service_1.autorServicio.eliminar(id);
            res.json({ success: true, mensaje: 'Autor eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=autor.controller.js.map