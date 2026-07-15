"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const reserva_controller_1 = require("./reserva.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const reserva_validator_1 = require("./reserva.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(reserva_validator_1.filtroReservaSchema, 'query'), reserva_controller_1.reservaControlador.obtenerTodos);
router.get('/mis-reservas', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), reserva_controller_1.reservaControlador.misReservas);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), reserva_controller_1.reservaControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), (0, validate_middleware_1.validar)(reserva_validator_1.crearReservaSchema), reserva_controller_1.reservaControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(reserva_validator_1.actualizarReservaSchema), reserva_controller_1.reservaControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), reserva_controller_1.reservaControlador.eliminar);
exports.default = router;
//# sourceMappingURL=reserva.routes.js.map