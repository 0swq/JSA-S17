import { CrearFavoritoDto } from './favorito.dto';
export declare const favoritoRepositorio: {
    obtenerPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<({
        libro: {
            id: string;
            titulo: string;
            isbn: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__FavoritoClient<{
        libro: {
            id: string;
            titulo: string;
            isbn: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearFavoritoDto): import(".prisma/client").Prisma.Prisma__FavoritoClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__FavoritoClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=favorito.repository.d.ts.map