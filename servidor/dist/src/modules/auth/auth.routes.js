"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const usuario_service_1 = require("../usuarios/usuario.service");
const usuario_validator_1 = require("../usuarios/usuario.validator");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/login', async (req, res, next) => {
    try {
        const { correo, password } = req.body;
        const result = await usuario_service_1.usuarioServicio.login(correo, password);
        res.json({ success: true, data: result });
    }
    catch (error) {
        next(error);
    }
});
router.post('/registro', (0, validate_middleware_1.validar)(usuario_validator_1.crearUsuarioSchema), async (req, res, next) => {
    try {
        const usuario = await usuario_service_1.usuarioServicio.crear(req.body);
        res.status(201).json({ success: true, data: usuario });
    }
    catch (error) {
        next(error);
    }
});
router.get('/perfil', auth_middleware_1.middlewareAutenticacion, async (req, res, next) => {
    try {
        const usuario = await usuario_service_1.usuarioServicio.obtenerPorId(req.usuario.id);
        res.json({ success: true, data: usuario });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map