"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaControlador = void 0;
const categoria_service_1 = require("./categoria.service");
exports.categoriaControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const categorias = await categoria_service_1.categoriaServicio.obtenerTodos();
            res.json({ success: true, data: categorias });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const categoria = await categoria_service_1.categoriaServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: categoria });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const categoria = await categoria_service_1.categoriaServicio.crear(req.body);
            res.status(201).json({ success: true, data: categoria });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const categoria = await categoria_service_1.categoriaServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: categoria });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await categoria_service_1.categoriaServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Categoría eliminada correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=categoria.controller.js.map