"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroUsuarioSchema = exports.actualizarUsuarioSchema = exports.crearUsuarioSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearUsuarioSchema = joi_1.default.object({
    rolId: joi_1.default.string().uuid().optional().messages({
        'string.uuid': 'El rolId debe ser un UUID válido',
    }),
    nombre: joi_1.default.string().max(100).optional().messages({
        'string.max': 'El nombre no puede superar los 100 caracteres',
    }),
    apellidos: joi_1.default.string().max(200).optional().messages({
        'string.max': 'Los apellidos no pueden superar los 200 caracteres',
    }),
    dni: joi_1.default.string().length(8).pattern(/^\d+$/).optional().messages({
        'string.length': 'El DNI debe tener exactamente 8 dígitos',
        'string.pattern.base': 'El DNI solo debe contener números',
    }),
    correo: joi_1.default.string().email().optional().messages({
        'string.email': 'El correo no tiene un formato válido',
    }),
    password: joi_1.default.string().min(8).required().messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'any.required': 'La contraseña es obligatoria',
    }),
});
exports.actualizarUsuarioSchema = joi_1.default.object({
    rolId: joi_1.default.string().uuid().optional().messages({
        'string.uuid': 'El rolId debe ser un UUID válido',
    }),
    nombre: joi_1.default.string().max(100).optional().messages({
        'string.max': 'El nombre no puede superar los 100 caracteres',
    }),
    apellidos: joi_1.default.string().max(200).optional().messages({
        'string.max': 'Los apellidos no pueden superar los 200 caracteres',
    }),
    dni: joi_1.default.string().length(8).pattern(/^\d+$/).optional().messages({
        'string.length': 'El DNI debe tener exactamente 8 dígitos',
        'string.pattern.base': 'El DNI solo debe contener números',
    }),
    correo: joi_1.default.string().email().optional().messages({
        'string.email': 'El correo no tiene un formato válido',
    }),
    password: joi_1.default.string().min(8).optional().messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
    }),
}).min(1);
exports.filtroUsuarioSchema = joi_1.default.object({
    nombre: joi_1.default.string().optional(),
    apellidos: joi_1.default.string().optional(),
    correo: joi_1.default.string().optional(),
    rolId: joi_1.default.string().uuid().optional(),
});
//# sourceMappingURL=usuario.validator.js.map