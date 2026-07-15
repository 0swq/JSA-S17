"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const ejemplar_controller_1 = require("./ejemplar.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const ejemplar_validator_1 = require("./ejemplar.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
// Ruta pública para que cualquier usuario autenticado pueda ver ejemplares por libro (ej: al reservar)
router.get('/libro/:libroId', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), ejemplar_controller_1.ejemplarControlador.obtenerPorLibro);
// Las demás rutas requieren admin o bibliotecario
router.use((0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario']));
router.get('/', ejemplar_controller_1.ejemplarControlador.obtenerTodos);
router.get('/:id', ejemplar_controller_1.ejemplarControlador.obtenerPorId);
router.post('/', (0, validate_middleware_1.validar)(ejemplar_validator_1.crearEjemplarSchema), ejemplar_controller_1.ejemplarControlador.crear);
router.patch('/:id', (0, validate_middleware_1.validar)(ejemplar_validator_1.actualizarEjemplarSchema), ejemplar_controller_1.ejemplarControlador.actualizar);
router.delete('/:id', ejemplar_controller_1.ejemplarControlador.eliminar);
exports.default = router;
//# sourceMappingURL=ejemplar.routes.js.map