"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const editorial_controller_1 = require("./editorial.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const editorial_validator_1 = require("./editorial.validator");
const router = (0, express_1.Router)();
router.get('/', editorial_controller_1.editorialControlador.obtenerTodos);
router.get('/:id', editorial_controller_1.editorialControlador.obtenerPorId);
router.use(auth_middleware_1.middlewareAutenticacion);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(editorial_validator_1.crearEditorialSchema), editorial_controller_1.editorialControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(editorial_validator_1.actualizarEditorialSchema), editorial_controller_1.editorialControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), editorial_controller_1.editorialControlador.eliminar);
exports.default = router;
//# sourceMappingURL=editorial.routes.js.map