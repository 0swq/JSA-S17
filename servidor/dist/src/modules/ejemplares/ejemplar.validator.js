"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarEjemplarSchema = exports.crearEjemplarSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearEjemplarSchema = joi_1.default.object({
    libroId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El libroId es obligatorio',
    }),
    codigoBarras: joi_1.default.string().max(50).required().messages({
        'any.required': 'El código de barras es obligatorio',
    }),
    estado: joi_1.default.string().valid('disponible', 'prestado', 'perdido', 'mantenimiento').optional(),
    ubicacion: joi_1.default.string().max(100).optional(),
    fechaAdquisicion: joi_1.default.date().iso().optional(),
});
exports.actualizarEjemplarSchema = joi_1.default.object({
    libroId: joi_1.default.string().uuid().optional(),
    codigoBarras: joi_1.default.string().max(50).optional(),
    estado: joi_1.default.string().valid('disponible', 'prestado', 'perdido', 'mantenimiento').optional(),
    ubicacion: joi_1.default.string().max(100).optional().allow(null),
    fechaAdquisicion: joi_1.default.date().iso().optional().allow(null),
}).min(1);
//# sourceMappingURL=ejemplar.validator.js.map