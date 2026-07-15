"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resenaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const resena_repository_1 = require("./resena.repository");
exports.resenaServicio = {
    obtenerPorLibro(libroId) {
        return resena_repository_1.resenaRepositorio.obtenerPorLibro(libroId);
    },
    async obtenerPorId(id) {
        const resena = await resena_repository_1.resenaRepositorio.obtenerPorId(id);
        if (!resena)
            throw ApiError_1.ApiError.noEncontrado('Reseña no encontrada');
        return resena;
    },
    obtenerPorUsuario(usuarioId) {
        return resena_repository_1.resenaRepositorio.obtenerPorUsuario(usuarioId);
    },
    crear(data) {
        return resena_repository_1.resenaRepositorio.crear(data);
    },
    async actualizar(id, usuarioId, data) {
        const resena = await resena_repository_1.resenaRepositorio.obtenerPorId(id);
        if (!resena)
            throw ApiError_1.ApiError.noEncontrado('Reseña no encontrada');
        if (resena.usuarioId !== usuarioId) {
            throw ApiError_1.ApiError.accesoDenegado('Solo puedes editar tus propias reseñas');
        }
        return resena_repository_1.resenaRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        if (!await resena_repository_1.resenaRepositorio.obtenerPorId(id))
            throw ApiError_1.ApiError.noEncontrado('Reseña no encontrada');
        await resena_repository_1.resenaRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=resena.service.js.map