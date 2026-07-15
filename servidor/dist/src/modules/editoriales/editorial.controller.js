"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorialControlador = void 0;
const editorial_service_1 = require("./editorial.service");
exports.editorialControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const editoriales = await editorial_service_1.editorialServicio.obtenerTodos();
            res.json({ success: true, data: editoriales });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const editorial = await editorial_service_1.editorialServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: editorial });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const editorial = await editorial_service_1.editorialServicio.crear(req.body);
            res.status(201).json({ success: true, data: editorial });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const editorial = await editorial_service_1.editorialServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: editorial });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await editorial_service_1.editorialServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Editorial eliminada correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=editorial.controller.js.map