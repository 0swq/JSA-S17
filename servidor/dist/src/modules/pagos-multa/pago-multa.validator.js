"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarPagoMultaSchema = exports.crearPagoMultaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearPagoMultaSchema = joi_1.default.object({
    multaId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El multaId es obligatorio',
    }),
    montoPagado: joi_1.default.number().positive().required().messages({
        'any.required': 'El monto pagado es obligatorio',
    }),
    metodoPago: joi_1.default.string().valid('efectivo', 'transferencia', 'tarjeta').required().messages({
        'any.required': 'El método de pago es obligatorio',
    }),
});
exports.actualizarPagoMultaSchema = joi_1.default.object({
    montoPagado: joi_1.default.number().positive().optional(),
    metodoPago: joi_1.default.string().valid('efectivo', 'transferencia', 'tarjeta').optional(),
}).min(1);
//# sourceMappingURL=pago-multa.validator.js.map