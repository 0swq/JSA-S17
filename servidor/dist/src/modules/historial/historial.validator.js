"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroHistorialSchema = exports.crearHistorialSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearHistorialSchema = joi_1.default.object({
    nombreAccion: joi_1.default.string().max(100).required().messages({
        'string.max': 'El nombre de la acción no puede superar los 100 caracteres',
        'any.required': 'El nombre de la acción es obligatorio',
    }),
    accion: joi_1.default.string().required().messages({
        'any.required': 'La acción es obligatoria',
    }),
    hechoPorId: joi_1.default.string().required().messages({
        'any.required': 'El ID del usuario es obligatorio',
    }),
    modulo: joi_1.default.string().max(50).optional(),
});
exports.filtroHistorialSchema = joi_1.default.object({
    hechoPorId: joi_1.default.string().optional(),
    modulo: joi_1.default.string().max(50).optional(),
    nombreAccion: joi_1.default.string().max(100).optional(),
    accion: joi_1.default.string().optional(),
    buscar: joi_1.default.string().max(200).optional(),
    desde: joi_1.default.date().iso().optional(),
    hasta: joi_1.default.date().iso().optional(),
});
//# sourceMappingURL=historial.validator.js.map