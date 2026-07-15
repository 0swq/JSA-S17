import { CrearMultaDto, ActualizarMultaDto, RespuestaMultaDto } from './multa.dto';
export declare const multaServicio: {
    obtenerTodos(filtros?: any): Promise<RespuestaMultaDto[]>;
    obtenerPorId(id: string): Promise<RespuestaMultaDto>;
    obtenerPorUsuario(usuarioId: string): Promise<RespuestaMultaDto[]>;
    crear(data: CrearMultaDto): Promise<RespuestaMultaDto>;
    actualizar(id: string, data: ActualizarMultaDto): Promise<RespuestaMultaDto>;
};
//# sourceMappingURL=multa.service.d.ts.map