import { CrearEjemplarDto, ActualizarEjemplarDto, RespuestaEjemplarDto } from './ejemplar.dto';
export declare const ejemplarServicio: {
    obtenerTodos(): Promise<RespuestaEjemplarDto[]>;
    obtenerPorLibro(libroId: string): Promise<RespuestaEjemplarDto[]>;
    obtenerPorId(id: string): Promise<RespuestaEjemplarDto>;
    crear(data: CrearEjemplarDto): Promise<RespuestaEjemplarDto>;
    actualizar(id: string, data: ActualizarEjemplarDto): Promise<RespuestaEjemplarDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=ejemplar.service.d.ts.map