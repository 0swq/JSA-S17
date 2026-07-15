"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const pago_multa_controller_1 = require("./pago-multa.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const pago_multa_validator_1 = require("./pago-multa.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.use((0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']));
router.get('/', pago_multa_controller_1.pagoMultaControlador.obtenerTodos);
router.get('/multa/:multaId', pago_multa_controller_1.pagoMultaControlador.obtenerPorMulta);
router.get('/:id', pago_multa_controller_1.pagoMultaControlador.obtenerPorId);
router.post('/', (0, validate_middleware_1.validar)(pago_multa_validator_1.crearPagoMultaSchema), pago_multa_controller_1.pagoMultaControlador.crear);
router.patch('/:id', (0, validate_middleware_1.validar)(pago_multa_validator_1.actualizarPagoMultaSchema), pago_multa_controller_1.pagoMultaControlador.actualizar);
exports.default = router;
//# sourceMappingURL=pago-multa.routes.js.map