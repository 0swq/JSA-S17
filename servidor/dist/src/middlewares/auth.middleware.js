"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareAutenticacion = void 0;
const jwt_1 = require("@config/jwt");
const ApiError_1 = require("@utils/ApiError");
const prisma_1 = require("@modules/prisma");
const middlewareAutenticacion = async (req, res, next) => {
    try {
        const encabezadoAuth = req.headers.authorization;
        if (!encabezadoAuth || !encabezadoAuth.startsWith('Bearer ')) {
            throw ApiError_1.ApiError.noAutorizado('Token de acceso no proporcionado');
        }
        const token = encabezadoAuth.split(' ')[1];
        if (!token) {
            throw ApiError_1.ApiError.noAutorizado('Token de acceso no proporcionado');
        }
        const decodificado = (0, jwt_1.verificarToken)(token);
        const usuario = await prisma_1.prisma.usuario.findUnique({
            where: { id: decodificado.id },
            include: { rol: true },
        });
        if (!usuario) {
            throw ApiError_1.ApiError.noAutorizado('Usuario no encontrado');
        }
        const { passwordHash, ...usuarioSinPassword } = usuario;
        req.usuario = usuarioSinPassword;
        next();
    }
    catch (error) {
        if (error.esOperacional) {
            return next(error);
        }
        if (error.name === 'JsonWebTokenError') {
            return next(ApiError_1.ApiError.noAutorizado('Token inválido'));
        }
        if (error.name === 'TokenExpiredError') {
            return next(ApiError_1.ApiError.noAutorizado('Token expirado'));
        }
        return next(ApiError_1.ApiError.noAutorizado('Error de autenticación'));
    }
};
exports.middlewareAutenticacion = middlewareAutenticacion;
//# sourceMappingURL=auth.middleware.js.map