"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroPrestamoSchema = exports.actualizarPrestamoSchema = exports.crearPrestamoSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearPrestamoSchema = joi_1.default.object({
    usuarioId: joi_1.default.string().required().messages({
        'any.required': 'El usuarioId es obligatorio',
    }),
    ejemplarId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El ejemplarId es obligatorio',
    }),
    fechaMaxDevolucion: joi_1.default.date().iso().required().messages({
        'any.required': 'La fecha máxima de devolución es obligatoria',
    }),
});
exports.actualizarPrestamoSchema = joi_1.default.object({
    fechaDevolucion: joi_1.default.date().iso().optional(),
    estado: joi_1.default.string().valid('activo', 'devuelto', 'vencido').optional(),
}).min(1);
exports.filtroPrestamoSchema = joi_1.default.object({
    estado: joi_1.default.string().valid('activo', 'devuelto', 'vencido').optional(),
    usuarioId: joi_1.default.string().optional(),
    ejemplarId: joi_1.default.string().uuid().optional(),
});
//# sourceMappingURL=prestamo.validator.js.map