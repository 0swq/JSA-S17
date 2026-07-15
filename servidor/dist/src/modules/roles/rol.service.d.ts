import { CrearRolDto, ActualizarRolDto, RespuestaRolDto } from './rol.dto';
export declare const rolServicio: {
    obtenerTodos(): Promise<RespuestaRolDto[]>;
    obtenerPorId(id: string): Promise<RespuestaRolDto>;
    crear(data: CrearRolDto): Promise<RespuestaRolDto>;
    actualizar(id: string, data: ActualizarRolDto): Promise<RespuestaRolDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=rol.service.d.ts.map