"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarConfiguracionMultaSchema = exports.crearConfiguracionMultaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearConfiguracionMultaSchema = joi_1.default.object({
    tarifaDiaria: joi_1.default.number().positive().required().messages({
        'any.required': 'La tarifa diaria es obligatoria',
    }),
    diasMaxPrestamo: joi_1.default.number().integer().min(1).required().messages({
        'any.required': 'Los días máximos de préstamo son obligatorios',
    }),
});
exports.actualizarConfiguracionMultaSchema = joi_1.default.object({
    tarifaDiaria: joi_1.default.number().positive().optional(),
    diasMaxPrestamo: joi_1.default.number().integer().min(1).optional(),
}).min(1);
//# sourceMappingURL=configuracion-multa.validator.js.map