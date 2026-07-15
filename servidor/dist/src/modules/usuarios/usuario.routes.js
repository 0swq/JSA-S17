"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const usuario_controller_1 = require("./usuario.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const usuario_validator_1 = require("./usuario.validator");
const router = (0, express_1.Router)();
router.post('/login', (0, validate_middleware_1.validar)(usuario_validator_1.crearUsuarioSchema), usuario_controller_1.usuarioControlador.login);
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(usuario_validator_1.filtroUsuarioSchema, 'query'), usuario_controller_1.usuarioControlador.obtenerTodos);
router.get('/me', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), usuario_controller_1.usuarioControlador.perfilPropio);
router.get('/nombre/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), usuario_controller_1.usuarioControlador.obtenerNombrePorId);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), usuario_controller_1.usuarioControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin']), (0, validate_middleware_1.validar)(usuario_validator_1.crearUsuarioSchema), usuario_controller_1.usuarioControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin']), (0, validate_middleware_1.validar)(usuario_validator_1.actualizarUsuarioSchema), usuario_controller_1.usuarioControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin']), usuario_controller_1.usuarioControlador.eliminar);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map