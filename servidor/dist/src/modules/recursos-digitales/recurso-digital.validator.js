"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarRecursoDigitalSchema = exports.crearRecursoDigitalSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearRecursoDigitalSchema = joi_1.default.object({
    libroId: joi_1.default.string().uuid().required().messages({
        'string.uuid': 'El libroId debe ser un UUID válido',
        'any.required': 'El libroId es obligatorio',
    }),
    tipo: joi_1.default.string().valid('pdf', 'epub', 'audiolibro', 'video').required().messages({
        'any.required': 'El tipo es obligatorio',
    }),
    url: joi_1.default.string().uri().required().messages({
        'any.required': 'La URL es obligatoria',
    }),
    formato: joi_1.default.string().max(20).optional(),
});
exports.actualizarRecursoDigitalSchema = joi_1.default.object({
    libroId: joi_1.default.string().uuid().optional(),
    tipo: joi_1.default.string().valid('pdf', 'epub', 'audiolibro', 'video').optional(),
    url: joi_1.default.string().uri().optional(),
    formato: joi_1.default.string().max(20).optional(),
}).min(1);
//# sourceMappingURL=recurso-digital.validator.js.map