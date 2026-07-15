"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const autor_controller_1 = require("./autor.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const autor_validator_1 = require("./autor.validator");
const router = (0, express_1.Router)();
router.get('/', autor_controller_1.autorControlador.obtenerTodos);
router.get('/:id', autor_controller_1.autorControlador.obtenerPorId);
router.use(auth_middleware_1.middlewareAutenticacion);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(autor_validator_1.crearAutorSchema), autor_controller_1.autorControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(autor_validator_1.actualizarAutorSchema), autor_controller_1.autorControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), autor_controller_1.autorControlador.eliminar);
exports.default = router;
//# sourceMappingURL=autor.routes.js.map