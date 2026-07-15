import { CrearPrestamoDto, ActualizarPrestamoDto, RespuestaPrestamoDto } from './prestamo.dto';
export declare const prestamoServicio: {
    obtenerTodos(filtros?: any): Promise<RespuestaPrestamoDto[]>;
    obtenerPorUsuario(usuarioId: string): Promise<RespuestaPrestamoDto[]>;
    obtenerPorId(id: string, usuarioId: string, rol: string): Promise<RespuestaPrestamoDto>;
    crear(data: CrearPrestamoDto): Promise<RespuestaPrestamoDto>;
    actualizar(id: string, data: ActualizarPrestamoDto): Promise<RespuestaPrestamoDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=prestamo.service.d.ts.map