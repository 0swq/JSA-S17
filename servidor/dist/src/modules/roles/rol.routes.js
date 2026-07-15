"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const rol_controller_1 = require("./rol.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const rol_validator_1 = require("./rol.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.use((0, role_middleware_1.middlewareRol)(['admin']));
router.get('/', rol_controller_1.rolControlador.obtenerTodos);
router.get('/:id', rol_controller_1.rolControlador.obtenerPorId);
router.post('/', (0, validate_middleware_1.validar)(rol_validator_1.crearRolSchema), rol_controller_1.rolControlador.crear);
router.patch('/:id', (0, validate_middleware_1.validar)(rol_validator_1.actualizarRolSchema), rol_controller_1.rolControlador.actualizar);
router.delete('/:id', rol_controller_1.rolControlador.eliminar);
exports.default = router;
//# sourceMappingURL=rol.routes.js.map