"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtroLibroSchema = exports.actualizarLibroSchema = exports.crearLibroSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearLibroSchema = joi_1.default.object({
    titulo: joi_1.default.string().max(300).required().messages({
        'string.max': 'El título no puede superar los 300 caracteres',
        'any.required': 'El título es obligatorio',
    }),
    isbn: joi_1.default.string().max(20).optional().messages({
        'string.max': 'El ISBN no puede superar los 20 caracteres',
    }),
    editorialId: joi_1.default.string().uuid().required().messages({
        'string.uuid': 'El editorialId debe ser un UUID válido',
        'any.required': 'El editorialId es obligatorio',
    }),
    anioPublicacion: joi_1.default.number().integer().min(1000).max(2100).optional(),
    idioma: joi_1.default.string().max(50).optional(),
    publicado: joi_1.default.boolean().optional(),
    descripcion: joi_1.default.string().optional(),
    fotoUrl: joi_1.default.string().uri().optional(),
    autorIds: joi_1.default.array().items(joi_1.default.string().uuid()).optional(),
    categoriaIds: joi_1.default.array().items(joi_1.default.string().uuid()).optional(),
    recursosDigitales: joi_1.default.array().items(joi_1.default.object({
        tipo: joi_1.default.string().required(),
        url: joi_1.default.string().uri().required(),
        formato: joi_1.default.string().optional(),
    })).optional(),
});
exports.actualizarLibroSchema = joi_1.default.object({
    titulo: joi_1.default.string().max(300).optional(),
    isbn: joi_1.default.string().max(20).optional(),
    editorialId: joi_1.default.string().uuid().optional(),
    anioPublicacion: joi_1.default.number().integer().min(1000).max(2100).optional(),
    idioma: joi_1.default.string().max(50).optional(),
    publicado: joi_1.default.boolean().optional(),
    descripcion: joi_1.default.string().optional(),
    fotoUrl: joi_1.default.string().uri().optional(),
    autorIds: joi_1.default.array().items(joi_1.default.string().uuid()).optional(),
    categoriaIds: joi_1.default.array().items(joi_1.default.string().uuid()).optional(),
    recursosDigitales: joi_1.default.array().items(joi_1.default.object({
        tipo: joi_1.default.string().required(),
        url: joi_1.default.string().uri().required(),
        formato: joi_1.default.string().optional(),
    })).optional(),
}).min(1);
exports.filtroLibroSchema = joi_1.default.object({
    titulo: joi_1.default.string().max(300).optional(),
    isbn: joi_1.default.string().max(20).optional(),
    editorialId: joi_1.default.string().uuid().optional(),
    autorId: joi_1.default.string().uuid().optional(),
    categoriaId: joi_1.default.string().uuid().optional(),
    publicado: joi_1.default.boolean().optional(),
    anioPublicacion: joi_1.default.number().integer().optional(),
});
//# sourceMappingURL=libro.validator.js.map