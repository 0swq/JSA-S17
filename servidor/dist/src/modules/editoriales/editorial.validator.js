"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarEditorialSchema = exports.crearEditorialSchema = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.crearEditorialSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(150).optional(),
    pais: joi_1.default.string().max(100).optional(),
});
exports.actualizarEditorialSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(150).optional(),
    pais: joi_1.default.string().max(100).optional(),
}).min(1);
//# sourceMappingURL=editorial.validator.js.map