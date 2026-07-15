export interface PayloadToken {
    id: string;
    rolId: string;
    correo?: string;
}
export declare const generarToken: (payload: PayloadToken) => string;
export declare const verificarToken: (token: string) => PayloadToken;
//# sourceMappingURL=jwt.d.ts.map