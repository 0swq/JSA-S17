"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const libro_controller_1 = require("./libro.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const libro_validator_1 = require("./libro.validator");
const router = (0, express_1.Router)();
router.get('/grafo', libro_controller_1.libroControlador.solicitarGrafo);
router.get('/buscar', libro_controller_1.libroControlador.buscar);
router.get('/', (0, validate_middleware_1.validar)(libro_validator_1.filtroLibroSchema, 'query'), libro_controller_1.libroControlador.obtenerTodos);
router.get('/:id', libro_controller_1.libroControlador.obtenerPorId);
router.use(auth_middleware_1.middlewareAutenticacion);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(libro_validator_1.crearLibroSchema), libro_controller_1.libroControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(libro_validator_1.actualizarLibroSchema), libro_controller_1.libroControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), libro_controller_1.libroControlador.eliminar);
exports.default = router;
//# sourceMappingURL=libro.routes.js.map