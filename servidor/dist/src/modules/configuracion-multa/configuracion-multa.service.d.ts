import { CrearConfiguracionMultaDto, ActualizarConfiguracionMultaDto, RespuestaConfiguracionMultaDto } from './configuracion-multa.dto';
export declare const configuracionMultaServicio: {
    obtener(): Promise<RespuestaConfiguracionMultaDto | null>;
    obtenerPorId(id: string): Promise<RespuestaConfiguracionMultaDto>;
    crear(data: CrearConfiguracionMultaDto): Promise<RespuestaConfiguracionMultaDto>;
    actualizar(id: string, data: ActualizarConfiguracionMultaDto): Promise<RespuestaConfiguracionMultaDto>;
};
//# sourceMappingURL=configuracion-multa.service.d.ts.map