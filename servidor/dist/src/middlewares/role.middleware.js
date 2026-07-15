"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareRol = void 0;
const ApiError_1 = require("@utils/ApiError");
const middlewareRol = (rolesPermitidos = []) => {
    return (req, res, next) => {
        const usuario = req.usuario;
        if (!usuario) {
            return next(ApiError_1.ApiError.noAutorizado('Se requiere autenticación'));
        }
        if (!usuario.rol?.nombre) {
            return next(ApiError_1.ApiError.accesoDenegado('Rol de usuario no definido'));
        }
        const rolUsuario = usuario.rol.nombre;
        if (!rolesPermitidos.includes(rolUsuario)) {
            return next(ApiError_1.ApiError.accesoDenegado(`Acceso denegado. Se requiere uno de los siguientes roles: ${rolesPermitidos.join(', ')}`));
        }
        next();
    };
};
exports.middlewareRol = middlewareRol;
//# sourceMappingURL=role.middleware.js.map