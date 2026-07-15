"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const prestamo_controller_1 = require("./prestamo.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const prestamo_validator_1 = require("./prestamo.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(prestamo_validator_1.filtroPrestamoSchema, 'query'), prestamo_controller_1.prestamoControlador.obtenerTodos);
router.get('/mis-prestamos', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), prestamo_controller_1.prestamoControlador.misPrestamos);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), prestamo_controller_1.prestamoControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), (0, validate_middleware_1.validar)(prestamo_validator_1.crearPrestamoSchema), prestamo_controller_1.prestamoControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(prestamo_validator_1.actualizarPrestamoSchema), prestamo_controller_1.prestamoControlador.actualizar);
exports.default = router;
//# sourceMappingURL=prestamo.routes.js.map