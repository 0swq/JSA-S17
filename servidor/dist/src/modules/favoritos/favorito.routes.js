"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = require("express");
const favorito_controller_1 = require("./favorito.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const role_middleware_1 = require("@middlewares/role.middleware");
const validate_middleware_1 = require("@middlewares/validate.middleware");
const favorito_validator_1 = require("./favorito.validator");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.middlewareAutenticacion);
router.get('/mis-favoritos', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), favorito_controller_1.favoritoControlador.misFavoritos);
router.get('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), favorito_controller_1.favoritoControlador.obtenerPorId);
router.post('/', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), (0, validate_middleware_1.validar)(favorito_validator_1.crearFavoritoSchema), favorito_controller_1.favoritoControlador.crear);
router.delete('/:id', (0, role_middleware_1.middlewareRol)(['admin', 'bibliotecario', 'docente', 'estudiante']), favorito_controller_1.favoritoControlador.eliminar);
exports.default = router;
//# sourceMappingURL=favorito.routes.js.map