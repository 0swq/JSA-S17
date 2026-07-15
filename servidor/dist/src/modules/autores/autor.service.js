"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const autor_repository_1 = require("./autor.repository");
exports.autorServicio = {
    obtenerTodos() {
        return autor_repository_1.autorRepositorio.obtenerTodos();
    },
    async obtenerPorId(id) {
        const autor = await autor_repository_1.autorRepositorio.obtenerPorId(id);
        if (!autor)
            throw ApiError_1.ApiError.noEncontrado('Autor no encontrado');
        return autor;
    },
    crear(data) {
        return autor_repository_1.autorRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return autor_repository_1.autorRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await autor_repository_1.autorRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=autor.service.js.map