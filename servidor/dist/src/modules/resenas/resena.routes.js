"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const resena_controller_1 = require("./resena.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const resena_validator_1 = require("./resena.validator");
const router = (0, express_1.Router)();
router.get('/libro/:libroId', resena_controller_1.resenaControlador.obtenerPorLibro);
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/mis-resenas', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), resena_controller_1.resenaControlador.misResenas);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), resena_controller_1.resenaControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), (0, validate_middleware_1.validar)(resena_validator_1.crearResenaSchema), resena_controller_1.resenaControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), (0, validate_middleware_1.validar)(resena_validator_1.actualizarResenaSchema), resena_controller_1.resenaControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), resena_controller_1.resenaControlador.eliminar);
exports.default = router;
//# sourceMappingURL=resena.routes.js.map