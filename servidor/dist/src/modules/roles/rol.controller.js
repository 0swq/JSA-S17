"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolControlador = void 0;
const rol_service_1 = require("./rol.service");
exports.rolControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const roles = await rol_service_1.rolServicio.obtenerTodos();
            res.json({ success: true, data: roles });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const rol = await rol_service_1.rolServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: rol });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const rol = await rol_service_1.rolServicio.crear(req.body);
            res.status(201).json({ success: true, data: rol });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const rol = await rol_service_1.rolServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: rol });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await rol_service_1.rolServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Rol eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=rol.controller.js.map