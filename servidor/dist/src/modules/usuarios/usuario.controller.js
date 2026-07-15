"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioControlador = void 0;
const usuario_service_1 = require("@modules/usuarios/usuario.service");
exports.usuarioControlador = {
    async obtenerTodos(req, res, next) {
        try {
            const usuarios = await usuario_service_1.usuarioServicio.obtenerTodos();
            res.json({ success: true, data: usuarios });
        }
        catch (error) {
            next(error);
        }
    },
    async obtenerPorId(req, res, next) {
        try {
            const id = req.params.id;
            const usuario = await usuario_service_1.usuarioServicio.obtenerPorId(id);
            res.json({ success: true, data: usuario });
        }
        catch (error) {
            next(error);
        }
    },
    async crear(req, res, next) {
        try {
            const usuario = await usuario_service_1.usuarioServicio.crear(req.body);
            res.status(201).json({ success: true, data: usuario });
        }
        catch (error) {
            next(error);
        }
    },
    async actualizar(req, res, next) {
        try {
            const id = req.params.id;
            const usuario = await usuario_service_1.usuarioServicio.actualizar(id, req.body);
            res.json({ success: true, data: usuario });
        }
        catch (error) {
            next(error);
        }
    },
    async eliminar(req, res, next) {
        try {
            const id = req.params.id;
            await usuario_service_1.usuarioServicio.eliminar(id);
            res.json({ success: true, mensaje: 'Usuario eliminado correctamente' });
        }
        catch (error) {
            next(error);
        }
    },
    async login(req, res, next) {
        try {
            const { correo, password } = req.body;
            const resultado = await usuario_service_1.usuarioServicio.login(correo, password);
            res.json({ success: true, data: resultado });
        }
        catch (error) {
            next(error);
        }
    },
    async perfilPropio(req, res, next) {
        try {
            const usuario = await usuario_service_1.usuarioServicio.obtenerPorId(req.usuario.id);
            res.json({ success: true, data: usuario });
        }
        catch (error) {
            next(error);
        }
    },
    /** Devuelve { id, nombre, apellidos, correo } del usuario — público para autenticados */
    async obtenerNombrePorId(req, res, next) {
        try {
            const id = req.params.id;
            const usuario = await usuario_service_1.usuarioServicio.obtenerPorId(id);
            res.json({ success: true, data: { id: usuario.id, nombre: usuario.nombre, apellidos: usuario.apellidos, correo: usuario.correo } });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=usuario.controller.js.map