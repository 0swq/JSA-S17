"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const historial_controller_1 = require("./historial.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const historial_validator_1 = require("./historial.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(historial_validator_1.filtroHistorialSchema, 'query'), historial_controller_1.historialControlador.obtenerTodos);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), historial_controller_1.historialControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(historial_validator_1.crearHistorialSchema), historial_controller_1.historialControlador.crear);
exports.default = router;
//# sourceMappingURL=historial.routes.js.map