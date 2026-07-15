import { CrearCategoriaDto, ActualizarCategoriaDto, RespuestaCategoriaDto } from './categoria.dto';
export declare const categoriaServicio: {
    obtenerTodos(): Promise<RespuestaCategoriaDto[]>;
    obtenerPorId(id: string): Promise<RespuestaCategoriaDto>;
    crear(data: CrearCategoriaDto): Promise<RespuestaCategoriaDto>;
    actualizar(id: string, data: ActualizarCategoriaDto): Promise<RespuestaCategoriaDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=categoria.service.d.ts.map