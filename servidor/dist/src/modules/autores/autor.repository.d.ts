import { CrearAutorDto, ActualizarAutorDto } from './autor.dto';
export declare const autorRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nombre: string | null;
        apellidos: string;
        creadoEn: Date;
        fotoUrl: string | null;
        nacionalidad: string | null;
        biografia: string | null;
        fechaNacimiento: Date | null;
    }[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__AutorClient<{
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
            autorId: string;
        })[];
    } & {
        id: string;
        nombre: string | null;
        apellidos: string;
        creadoEn: Date;
        fotoUrl: string | null;
        nacionalidad: string | null;
        biografia: string | null;
        fechaNacimiento: Date | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearAutorDto): import(".prisma/client").Prisma.Prisma__AutorClient<{
        id: string;
        nombre: string | null;
        apellidos: string;
        creadoEn: Date;
        fotoUrl: string | null;
        nacionalidad: string | null;
        biografia: string | null;
        fechaNacimiento: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarAutorDto): import(".prisma/client").Prisma.Prisma__AutorClient<{
        id: string;
        nombre: string | null;
        apellidos: string;
        creadoEn: Date;
        fotoUrl: string | null;
        nacionalidad: string | null;
        biografia: string | null;
        fechaNacimiento: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__AutorClient<{
        id: string;
        nombre: string | null;
        apellidos: string;
        creadoEn: Date;
        fotoUrl: string | null;
        nacionalidad: string | null;
        biografia: string | null;
        fechaNacimiento: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=autor.repository.d.ts.map