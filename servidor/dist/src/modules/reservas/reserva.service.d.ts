import { CrearReservaDto, ActualizarReservaDto, RespuestaReservaDto } from './reserva.dto';
export declare const reservaServicio: {
    obtenerTodos(filtros?: any): Promise<RespuestaReservaDto[]>;
    obtenerPorId(id: string): Promise<RespuestaReservaDto>;
    obtenerPorUsuario(usuarioId: string): Promise<RespuestaReservaDto[]>;
    crear(data: CrearReservaDto & {
        usuarioId: string;
    }): Promise<RespuestaReservaDto>;
    actualizar(id: string, data: ActualizarReservaDto): Promise<RespuestaReservaDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=reserva.service.d.ts.map