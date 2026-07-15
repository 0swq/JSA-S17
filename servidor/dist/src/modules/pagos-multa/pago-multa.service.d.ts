import { CrearPagoMultaDto, ActualizarPagoMultaDto, RespuestaPagoMultaDto } from './pago-multa.dto';
export declare const pagoMultaServicio: {
    obtenerTodos(): Promise<RespuestaPagoMultaDto[]>;
    obtenerPorMulta(multaId: string): Promise<RespuestaPagoMultaDto[]>;
    obtenerPorId(id: string): Promise<RespuestaPagoMultaDto>;
    crear(data: CrearPagoMultaDto): Promise<RespuestaPagoMultaDto>;
    actualizar(id: string, data: ActualizarPagoMultaDto): Promise<RespuestaPagoMultaDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=pago-multa.service.d.ts.map