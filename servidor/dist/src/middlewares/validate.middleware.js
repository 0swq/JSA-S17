"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validar = void 0;
const ApiError_1 = require("@utils/ApiError");
const validar = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[property], {
            abortEarly: false,
            stripUnknown: true,
        });
        if (error) {
            const detalles = error.details.map((detalle) => ({
                campo: detalle.path.join('.'),
                mensaje: detalle.message,
            }));
            return next(ApiError_1.ApiError.solicitudIncorrecta('Error de validación', detalles));
        }
        req[property] = value;
        next();
    };
};
exports.validar = validar;
//# sourceMappingURL=validate.middleware.js.map