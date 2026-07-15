import { CrearResenaDto, ActualizarResenaDto } from './resena.dto';
export declare const resenaRepositorio: {
    obtenerPorLibro(libroId: string): import(".prisma/client").Prisma.PrismaPromise<({
        usuario: {
            id: string;
            nombre: string;
            apellidos: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    })[]>;
    obtenerPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<({
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__ResenaClient<{
        usuario: {
            id: string;
            nombre: string;
            apellidos: string;
        };
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearResenaDto): import(".prisma/client").Prisma.Prisma__ResenaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarResenaDto): import(".prisma/client").Prisma.Prisma__ResenaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__ResenaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        libroId: string;
        puntuacion: number | null;
        comentario: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=resena.repository.d.ts.map