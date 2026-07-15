"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroReservaSchema = exports.actualizarReservaSchema = exports.crearReservaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearReservaSchema = joi_1.default.object({
    libroId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El libroId es obligatorio',
    }),
    ejemplarId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El ejemplarId es obligatorio',
    }),
    fechaExpiracion: joi_1.default.date().iso().required().messages({
        'any.required': 'La fecha de expiración es obligatoria',
    }),
});
exports.actualizarReservaSchema = joi_1.default.object({
    fechaExpiracion: joi_1.default.date().iso().optional(),
    estado: joi_1.default.string().valid('pendiente', 'activa', 'cancelada', 'completada').optional(),
}).min(1);
exports.filtroReservaSchema = joi_1.default.object({
    estado: joi_1.default.string().valid('pendiente', 'activa', 'cancelada', 'completada').optional(),
    usuarioId: joi_1.default.string().optional(),
    libroId: joi_1.default.string().uuid().optional(),
});
//# sourceMappingURL=reserva.validator.js.map