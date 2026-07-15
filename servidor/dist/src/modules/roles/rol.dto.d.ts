export interface CrearRolDto {
    nombre: string;
    descripcion?: string;
}
export interface ActualizarRolDto {
    nombre?: string;
    descripcion?: string;
}
export interface RespuestaRolDto {
    id: string;
    nombre: string;
    descripcion: string | null;
    creadoEn: Date;
}
//# sourceMappingURL=rol.dto.d.ts.map