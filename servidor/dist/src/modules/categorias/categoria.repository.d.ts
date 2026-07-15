import { CrearCategoriaDto, ActualizarCategoriaDto } from './categoria.dto';
export declare const categoriaRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<({
        subcategorias: {
            id: string;
            nombre: string;
            creadoEn: Date;
            padreId: string | null;
            activa: boolean;
        }[];
    } & {
        id: string;
        nombre: string;
        creadoEn: Date;
        padreId: string | null;
        activa: boolean;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__CategoriaClient<{
        libros: ({
            libro: {
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
            };
        } & {
            libroId: string;
            categoriaId: string;
        })[];
        subcategorias: {
            id: string;
            nombre: string;
            creadoEn: Date;
            padreId: string | null;
            activa: boolean;
        }[];
    } & {
        id: string;
        nombre: string;
        creadoEn: Date;
        padreId: string | null;
        activa: boolean;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearCategoriaDto): import(".prisma/client").Prisma.Prisma__CategoriaClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        padreId: string | null;
        activa: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarCategoriaDto): import(".prisma/client").Prisma.Prisma__CategoriaClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        padreId: string | null;
        activa: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__CategoriaClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        padreId: string | null;
        activa: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=categoria.repository.d.ts.map