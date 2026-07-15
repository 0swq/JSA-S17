export declare class ApiError extends Error {
    codigoEstado: number;
    errores: any[];
    esOperacional: boolean;
    constructor(codigoEstado: number, mensaje: string, errores?: any[]);
    static solicitudIncorrecta(mensaje?: string, errores?: any[]): ApiError;
    static noAutorizado(mensaje?: string): ApiError;
    static accesoDenegado(mensaje?: string): ApiError;
    static noEncontrado(mensaje?: string): ApiError;
    static conflicto(mensaje?: string): ApiError;
    static errorInterno(mensaje?: string): ApiError;
}
//# sourceMappingURL=ApiError.d.ts.map