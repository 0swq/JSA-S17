"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroMultaSchema = exports.actualizarMultaSchema = exports.crearMultaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearMultaSchema = joi_1.default.object({
    prestamoId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El prestamoId es obligatorio',
    }),
    monto: joi_1.default.number().positive().required().messages({
        'any.required': 'El monto es obligatorio',
    }),
    diasMora: joi_1.default.number().integer().min(1).required().messages({
        'any.required': 'Los días de mora son obligatorios',
    }),
});
exports.actualizarMultaSchema = joi_1.default.object({
    monto: joi_1.default.number().positive().optional(),
    diasMora: joi_1.default.number().integer().min(1).optional(),
    estado: joi_1.default.string().valid('pendiente', 'pagada', 'perdonada').optional(),
}).min(1);
exports.filtroMultaSchema = joi_1.default.object({
    estado: joi_1.default.string().valid('pendiente', 'pagada', 'perdonada').optional(),
    usuarioId: joi_1.default.string().optional(),
});
//# sourceMappingURL=multa.validator.js.map