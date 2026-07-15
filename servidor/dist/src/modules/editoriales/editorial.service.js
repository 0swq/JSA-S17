"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorialServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const editorial_repository_1 = require("./editorial.repository");
exports.editorialServicio = {
    obtenerTodos() {
        return editorial_repository_1.editorialRepositorio.obtenerTodos();
    },
    async obtenerPorId(id) {
        const editorial = await editorial_repository_1.editorialRepositorio.obtenerPorId(id);
        if (!editorial)
            throw ApiError_1.ApiError.noEncontrado('Editorial no encontrada');
        return editorial;
    },
    crear(data) {
        return editorial_repository_1.editorialRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return editorial_repository_1.editorialRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await editorial_repository_1.editorialRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=editorial.service.js.map