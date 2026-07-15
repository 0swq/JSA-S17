"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarRolSchema = exports.crearRolSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearRolSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(50).required().messages({
        'string.max': 'El nombre no puede superar los 50 caracteres',
        'any.required': 'El nombre es obligatorio',
    }),
    descripcion: joi_1.default.string().max(255).optional(),
});
exports.actualizarRolSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(50).optional(),
    descripcion: joi_1.default.string().max(255).optional(),
}).min(1);
//# sourceMappingURL=rol.validator.js.map