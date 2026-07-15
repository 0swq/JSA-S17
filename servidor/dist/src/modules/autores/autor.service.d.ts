import { CrearAutorDto, ActualizarAutorDto, RespuestaAutorDto } from './autor.dto';
export declare const autorServicio: {
    obtenerTodos(): Promise<RespuestaAutorDto[]>;
    obtenerPorId(id: string): Promise<RespuestaAutorDto>;
    crear(data: CrearAutorDto): Promise<RespuestaAutorDto>;
    actualizar(id: string, data: ActualizarAutorDto): Promise<RespuestaAutorDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=autor.service.d.ts.map