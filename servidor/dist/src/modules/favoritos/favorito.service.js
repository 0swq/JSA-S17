"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritoServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const favorito_repository_1 = require("./favorito.repository");
exports.favoritoServicio = {
    obtenerPorUsuario(usuarioId) {
        return favorito_repository_1.favoritoRepositorio.obtenerPorUsuario(usuarioId);
    },
    async obtenerPorId(id) {
        const favorito = await favorito_repository_1.favoritoRepositorio.obtenerPorId(id);
        if (!favorito)
            throw ApiError_1.ApiError.noEncontrado('Favorito no encontrado');
        return favorito;
    },
    crear(data) {
        return favorito_repository_1.favoritoRepositorio.crear(data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await favorito_repository_1.favoritoRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=favorito.service.js.map