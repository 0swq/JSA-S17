"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearFavoritoSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearFavoritoSchema = joi_1.default.object({
    usuarioId: joi_1.default.string().required().messages({
        'any.required': 'El usuarioId es obligatorio',
    }),
    libroId: joi_1.default.string().uuid().required().messages({
        'any.required': 'El libroId es obligatorio',
    }),
});
//# sourceMappingURL=favorito.validator.js.map