"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const rol_repository_1 = require("./rol.repository");
exports.rolServicio = {
    obtenerTodos() {
        return rol_repository_1.rolRepositorio.obtenerTodos();
    },
    async obtenerPorId(id) {
        const rol = await rol_repository_1.rolRepositorio.obtenerPorId(id);
        if (!rol)
            throw ApiError_1.ApiError.noEncontrado('Rol no encontrado');
        return rol;
    },
    crear(data) {
        return rol_repository_1.rolRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return rol_repository_1.rolRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await rol_repository_1.rolRepositorio.eliminar(id);
    },
};
//# sourceMappingURL=rol.service.js.map