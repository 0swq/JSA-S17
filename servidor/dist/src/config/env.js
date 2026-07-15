"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/biblioteca',
    JWT_SECRET: process.env.JWT_SECRET || 'cambio-esta-clave-en-produccion',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '8h',
    DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY || '',
    NODE_ENV: process.env.NODE_ENV || 'development',
};
//# sourceMappingURL=env.js.map