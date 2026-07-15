"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libroControlador = void 0;
const libro_service_1 = require("./libro.service");
exports.libroControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const { pagina, porPagina, ...filtros } = req.query;
            const resultado = await libro_service_1.libroServicio.obtenerTodos({
                ...filtros,
                pagina: pagina ? Number(pagina) : undefined,
                porPagina: porPagina ? Number(porPagina) : undefined,
            });
            res.json({ success: true, ...resultado });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const id = req.params.id;
            const libro = await libro_service_1.libroServicio.obtenerPorId(id);
            res.json({ success: true, data: libro });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const libro = await libro_service_1.libroServicio.crear(req.body);
            res.status(201).json({ success: true, data: libro });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const id = req.params.id;
            const libro = await libro_service_1.libroServicio.actualizar(id, req.body);
            res.json({ success: true, data: libro });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            const id = req.params.id;
            await libro_service_1.libroServicio.eliminar(id);
            res.json({ success: true, mensaje: 'Libro eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
    async solicitarGrafo(req, res, next) {
        try {
            const { q } = req.query;
            const resultado = await libro_service_1.libroServicio.solicitarGrafo(q);
            res.json({ success: true, ...resultado });
        }
        catch (error) {
            next(error);
        }
    },
    async buscar(req, res, next) {
        try {
            const { q, pagina, porPagina } = req.query;
            const resultado = await libro_service_1.libroServicio.buscar(q, pagina ? Number(pagina) : undefined, porPagina ? Number(porPagina) : undefined);
            res.json({ success: true, ...resultado });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=libro.controller.js.map