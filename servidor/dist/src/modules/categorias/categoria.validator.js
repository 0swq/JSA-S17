"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarCategoriaSchema = exports.crearCategoriaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearCategoriaSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(120).required().messages({
        'string.max': 'El nombre no puede superar los 120 caracteres',
        'any.required': 'El nombre es obligatorio',
    }),
    padreId: joi_1.default.string().uuid().optional(),
    activa: joi_1.default.boolean().optional(),
});
exports.actualizarCategoriaSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(120).optional(),
    padreId: joi_1.default.string().uuid().allow(null).optional(),
    activa: joi_1.default.boolean().optional(),
}).min(1);
//# sourceMappingURL=categoria.validator.js.map