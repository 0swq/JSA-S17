"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioServicio = void 0;
// @ts-nocheck
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("@config/jwt");
const ApiError_1 = require("@utils/ApiError");
const usuario_repository_1 = require("@modules/usuarios/usuario.repository");
const SALT_ROUNDS = 10;
exports.usuarioServicio = {
    obtenerTodos() {
        return usuario_repository_1.usuarioRepositorio.obtenerTodos();
    },
    async obtenerPorId(id) {
        const usuario = await usuario_repository_1.usuarioRepositorio.obtenerPorId(id);
        if (!usuario)
            throw ApiError_1.ApiError.noEncontrado('Usuario no encontrado');
        return usuario;
    },
    async crear(data) {
        const { password, rolId, ...resto } = data;
        // Si no se envía rolId, se asigna el rol "estudiante" por defecto
        let idRolFinal = rolId;
        if (!idRolFinal) {
            const rolEstudiante = await usuario_repository_1.usuarioRepositorio.obtenerRolPorNombre('estudiante');
            idRolFinal = rolEstudiante?.id;
            if (!idRolFinal)
                throw new ApiError_1.ApiError(500, 'No se encontró el rol "estudiante" en la BD');
        }
        const passwordHash = await bcrypt_1.default.hash(password, SALT_ROUNDS);
        return usuario_repository_1.usuarioRepositorio.crear({ ...resto, passwordHash, rolId: idRolFinal });
    },
    async actualizar(id, data) {
        await exports.usuarioServicio.obtenerPorId(id);
        const { password, ...resto } = data;
        const passwordHash = password
            ? await bcrypt_1.default.hash(password, SALT_ROUNDS)
            : undefined;
        return usuario_repository_1.usuarioRepositorio.actualizar(id, { ...resto, passwordHash });
    },
    async eliminar(id) {
        await exports.usuarioServicio.obtenerPorId(id);
        return usuario_repository_1.usuarioRepositorio.eliminar(id);
    },
    async login(correo, password) {
        const usuario = await usuario_repository_1.usuarioRepositorio.obtenerPorCorreoConHash(correo);
        if (!usuario)
            throw ApiError_1.ApiError.noAutorizado('Credenciales incorrectas');
        const esValido = await bcrypt_1.default.compare(password, usuario.passwordHash);
        if (!esValido)
            throw ApiError_1.ApiError.noAutorizado('Credenciales incorrectas');
        const token = (0, jwt_1.generarToken)({ id: usuario.id, rolId: usuario.rolId, correo: usuario.correo });
        const { passwordHash, ...usuarioSinHash } = usuario;
        return { token, usuario: usuarioSinHash };
    },
};
//# sourceMappingURL=usuario.service.js.map