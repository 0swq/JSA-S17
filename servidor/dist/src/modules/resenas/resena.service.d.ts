import { CrearResenaDto, ActualizarResenaDto, RespuestaResenaDto } from './resena.dto';
export declare const resenaServicio: {
    obtenerPorLibro(libroId: string): Promise<RespuestaResenaDto[]>;
    obtenerPorId(id: string): Promise<RespuestaResenaDto>;
    obtenerPorUsuario(usuarioId: string): Promise<RespuestaResenaDto[]>;
    crear(data: CrearResenaDto): Promise<RespuestaResenaDto>;
    actualizar(id: string, usuarioId: string, data: ActualizarResenaDto): Promise<RespuestaResenaDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=resena.service.d.ts.map