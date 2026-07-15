"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    if (err.esOperacional) {
        return res.status(err.codigoEstado).json({
            success: false,
            message: err.message,
            errors: err.errores || [],
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
    }
    if (err.code?.startsWith('P')) {
        const prismaError = mapPrismaError(err);
        return res.status(prismaError.statusCode).json({
            success: false,
            message: prismaError.message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
    }
    if (err.isJoi) {
        return res.status(400).json({
            success: false,
            message: 'Error de validación',
            errors: err.details.map((d) => ({ campo: d.path.join('.'), mensaje: d.message })),
        });
    }
    console.error('Error inesperado:', err);
    return res.status(500).json({
        success: false,
        message: 'Error interno del servidor',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
exports.errorMiddleware = errorMiddleware;
const mapPrismaError = (err) => {
    switch (err.code) {
        case 'P2002':
            return { statusCode: 409, message: `El valor ya existe: ${err.meta?.target || 'desconocido'}` };
        case 'P2025':
            return { statusCode: 404, message: 'Registro no encontrado' };
        case 'P2003':
            return { statusCode: 400, message: 'Violación de llave foránea' };
        case 'P2014':
            return { statusCode: 400, message: 'Violación de relación requerida' };
        default:
            return { statusCode: 500, message: 'Error de base de datos' };
    }
};
//# sourceMappingURL=error.middleware.js.map