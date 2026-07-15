"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const recurso_digital_controller_1 = require("./recurso-digital.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const recurso_digital_validator_1 = require("./recurso-digital.validator");
const router = (0, express_1.Router)();
router.get('/', recurso_digital_controller_1.recursoDigitalControlador.obtenerTodos);
router.get('/libro/:libroId', recurso_digital_controller_1.recursoDigitalControlador.obtenerPorLibro);
router.get('/:id', recurso_digital_controller_1.recursoDigitalControlador.obtenerPorId);
router.use(auth_middleware_1.middlewareAutenticacion);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(recurso_digital_validator_1.crearRecursoDigitalSchema), recurso_digital_controller_1.recursoDigitalControlador.crear);
router.patch('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), (0, validate_middleware_1.validar)(recurso_digital_validator_1.actualizarRecursoDigitalSchema), recurso_digital_controller_1.recursoDigitalControlador.actualizar);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']), recurso_digital_controller_1.recursoDigitalControlador.eliminar);
exports.default = router;
//# sourceMappingURL=recurso-digital.routes.js.map