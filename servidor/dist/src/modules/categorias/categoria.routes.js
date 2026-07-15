"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const categoria_controller_1 = require("./categoria.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const categoria_validator_1 = require("./categoria.validator");
const router = (0, express_1.Router)();
router.get('/', categoria_controller_1.categoriaControlador.obtenerTodos);
router.get('/:id', categoria_controller_1.categoriaControlador.obtenerPorId);
router.use(auth_middleware_1.middlewareAutenticacion);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(categoria_validator_1.crearCategoriaSchema), categoria_controller_1.categoriaControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(categoria_validator_1.actualizarCategoriaSchema), categoria_controller_1.categoriaControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), categoria_controller_1.categoriaControlador.eliminar);
exports.default = router;
//# sourceMappingURL=categoria.routes.js.map