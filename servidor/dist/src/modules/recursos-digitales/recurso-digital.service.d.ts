import { CrearRecursoDigitalDto, ActualizarRecursoDigitalDto, RespuestaRecursoDigitalDto } from './recurso-digital.dto';
export declare const recursoDigitalServicio: {
    obtenerTodos(): Promise<RespuestaRecursoDigitalDto[]>;
    obtenerPorLibro(libroId: string): Promise<RespuestaRecursoDigitalDto[]>;
    obtenerPorId(id: string): Promise<RespuestaRecursoDigitalDto>;
    crear(data: CrearRecursoDigitalDto): Promise<RespuestaRecursoDigitalDto>;
    actualizar(id: string, data: ActualizarRecursoDigitalDto): Promise<RespuestaRecursoDigitalDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=recurso-digital.service.d.ts.map