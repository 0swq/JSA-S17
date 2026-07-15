"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const configuracion_multa_controller_1 = require("./configuracion-multa.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const configuracion_multa_validator_1 = require("./configuracion-multa.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), configuracion_multa_controller_1.configuracionMultaControlador.obtener);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), configuracion_multa_controller_1.configuracionMultaControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin']), (0, validate_middleware_1.validar)(configuracion_multa_validator_1.crearConfiguracionMultaSchema), configuracion_multa_controller_1.configuracionMultaControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin']), (0, validate_middleware_1.validar)(configuracion_multa_validator_1.actualizarConfiguracionMultaSchema), configuracion_multa_controller_1.configuracionMultaControlador.actualizar);
exports.default = router;
//# sourceMappingURL=configuracion-multa.routes.js.map