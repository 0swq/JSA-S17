import { CrearEditorialDto, ActualizarEditorialDto, RespuestaEditorialDto } from './editorial.dto';
export declare const editorialServicio: {
    obtenerTodos(): Promise<RespuestaEditorialDto[]>;
    obtenerPorId(id: string): Promise<RespuestaEditorialDto>;
    crear(data: CrearEditorialDto): Promise<RespuestaEditorialDto>;
    actualizar(id: string, data: ActualizarEditorialDto): Promise<RespuestaEditorialDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=editorial.service.d.ts.map