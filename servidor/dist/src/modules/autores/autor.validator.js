"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarAutorSchema = exports.crearAutorSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearAutorSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(100).optional(),
    apellidos: joi_1.default.string().max(200).required().messages({
        'string.max': 'Los apellidos no pueden superar los 200 caracteres',
        'any.required': 'Los apellidos son obligatorios',
    }),
    nacionalidad: joi_1.default.string().max(100).optional(),
    biografia: joi_1.default.string().optional(),
    fotoUrl: joi_1.default.string().uri().optional(),
    fechaNacimiento: joi_1.default.date().iso().optional(),
});
exports.actualizarAutorSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(100).optional(),
    apellidos: joi_1.default.string().max(200).optional(),
    nacionalidad: joi_1.default.string().max(100).optional(),
    biografia: joi_1.default.string().optional(),
    fotoUrl: joi_1.default.string().uri().optional(),
    fechaNacimiento: joi_1.default.date().iso().optional(),
}).min(1);
//# sourceMappingURL=autor.validator.js.map