import { CrearFavoritoDto, RespuestaFavoritoDto } from './favorito.dto';
export declare const favoritoServicio: {
    obtenerPorUsuario(usuarioId: string): Promise<RespuestaFavoritoDto[]>;
    obtenerPorId(id: string): Promise<RespuestaFavoritoDto>;
    crear(data: CrearFavoritoDto): Promise<RespuestaFavoritoDto>;
    eliminar(id: string): Promise<void>;
};
//# sourceMappingURL=favorito.service.d.ts.map