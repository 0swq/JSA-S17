"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarResenaSchema = exports.crearResenaSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearResenaSchema = joi_1.default.object({
    usuarioId: joi_1.default.string().optional(),
    libroId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El libroId es obligatorio',
    }),
    puntuacion: joi_1.default.number().integer().min(1).max(5).optional(),
    comentario: joi_1.default.string().max(2000).optional(),
});
exports.actualizarResenaSchema = joi_1.default.object({
    puntuacion: joi_1.default.number().integer().min(1).max(5).optional(),
    comentario: joi_1.default.string().max(2000).optional(),
}).min(1);
//# sourceMappingURL=resena.validator.js.map