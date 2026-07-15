"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const categoria_repository_1 = require("./categoria.repository");
exports.categoriaServicio = {
    obtenerTodos() {
        return categoria_repository_1.categoriaRepositorio.obtenerTodos();
    },
    async obtenerPorId(id) {
        const categoria = await categoria_repository_1.categoriaRepositorio.obtenerPorId(id);
        if (!categoria)
            throw ApiError_1.ApiError.noEncontrado('Categoría no encontrada');
        return categoria;
    },
    crear(data) {
        return categoria_repository_1.categoriaRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return categoria_repository_1.categoriaRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await categoria_repository_1.categoriaRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=categoria.service.js.map