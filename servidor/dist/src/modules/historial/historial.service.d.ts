import { CrearHistorialDto, RespuestaHistorialDto } from './historial.dto';
export declare const historialServicio: {
    obtenerTodos(filtros?: {
        hechoPorId?: string;
        modulo?: string;
        nombreAccion?: string;
        accion?: string;
        buscar?: string;
        desde?: Date;
        hasta?: Date;
    }): Promise<RespuestaHistorialDto[]>;
    obtenerPorId(id: string): Promise<RespuestaHistorialDto>;
    crear(data: CrearHistorialDto): Promise<RespuestaHistorialDto>;
};
//# sourceMappingURL=historial.service.d.ts.map