"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursoDigitalControlador = void 0;
const recurso_digital_service_1 = require("./recurso-digital.service");
exports.recursoDigitalControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const recursos = await recurso_digital_service_1.recursoDigitalServicio.obtenerTodos();
            res.json({ success: true, data: recursos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorLibro(req, res, next) {
        try {
            const recursos = await recurso_digital_service_1.recursoDigitalServicio.obtenerPorLibro(req.params.libroId);
            res.json({ success: true, data: recursos });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const recurso = await recurso_digital_service_1.recursoDigitalServicio.obtenerPorId(req.params.id);
            res.json({ success: true, data: recurso });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const recurso = await recurso_digital_service_1.recursoDigitalServicio.crear(req.body);
            res.status(201).json({ success: true, data: recurso });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const recurso = await recurso_digital_service_1.recursoDigitalServicio.actualizar(req.params.id, req.body);
            res.json({ success: true, data: recurso });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            await recurso_digital_service_1.recursoDigitalServicio.eliminar(req.params.id);
            res.json({ success: true, mensaje: 'Recurso digital eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=recurso-digital.controller.js.map