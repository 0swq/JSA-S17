import { CrearEditorialDto, ActualizarEditorialDto } from './editorial.dto';
export declare const editorialRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nombre: string | null;
        creadoEn: Date;
        pais: string | null;
    }[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__EditorialClient<{
        libros: {
            id: string;
            creadoEn: Date;
            titulo: string;
            isbn: string | null;
            editorialId: string;
            anioPublicacion: number | null;
            idioma: string | null;
            publicado: boolean;
            fotoUrl: string | null;
            descripcion: string | null;
        }[];
    } & {
        id: string;
        nombre: string | null;
        creadoEn: Date;
        pais: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearEditorialDto): import(".prisma/client").Prisma.Prisma__EditorialClient<{
        id: string;
        nombre: string | null;
        creadoEn: Date;
        pais: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarEditorialDto): import(".prisma/client").Prisma.Prisma__EditorialClient<{
        id: string;
        nombre: string | null;
        creadoEn: Date;
        pais: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__EditorialClient<{
        id: string;
        nombre: string | null;
        creadoEn: Date;
        pais: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=editorial.repository.d.ts.map