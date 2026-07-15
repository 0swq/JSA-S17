"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const multa_controller_1 = require("./multa.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const multa_validator_1 = require("./multa.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(multa_validator_1.filtroMultaSchema, 'query'), multa_controller_1.multaControlador.obtenerTodos);
router.get('/mis-multas', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), multa_controller_1.multaControlador.misMultas);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), multa_controller_1.multaControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(multa_validator_1.crearMultaSchema), multa_controller_1.multaControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(multa_validator_1.actualizarMultaSchema), multa_controller_1.multaControlador.actualizar);
exports.default = router;
//# sourceMappingURL=multa.routes.js.map