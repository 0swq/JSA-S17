export interface CrearConfiguracionMultaDto {
    tarifaDiaria: number;
    diasMaxPrestamo: number;
}
export interface ActualizarConfiguracionMultaDto {
    tarifaDiaria?: number;
    diasMaxPrestamo?: number;
}
export interface RespuestaConfiguracionMultaDto {
    id: string;
    tarifaDiaria: number;
    diasMaxPrestamo: number;
    creadoEn: Date;
}
//# sourceMappingURL=configuracion-multa.dto.d.ts.map