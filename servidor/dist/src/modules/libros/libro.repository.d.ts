import { CrearLibroDto, ActualizarLibroDto } from './libro.dto';
export declare const libroRepositorio: {
    obtenerTodos(filtros?: {
        titulo?: string;
        isbn?: string;
        editorialId?: string;
        autorId?: string;
        categoriaId?: string;
        publicado?: boolean;
        anioPublicacion?: number;
        pagina?: number;
        porPagina?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__LibroClient<{
        editorial: {
            id: string;
            nombre: string | null;
            creadoEn: Date;
            pais: string | null;
        };
        recursosDigitales: {
            id: string;
            creadoEn: Date;
            libroId: string;
            tipo: string;
            url: string;
            formato: string | null;
        }[];
        ejemplares: {
            id: string;
            estado: string;
            codigoBarras: string;
            ubicacion: string;
            fechaAdquisicion: Date;
        }[];
        autores: ({
            autor: {
                id: string;
                nombre: string | null;
                apellidos: string;
                creadoEn: Date;
                fotoUrl: string | null;
                nacionalidad: string | null;
                biografia: string | null;
                fechaNacimiento: Date | null;
            };
        } & {
            libroId: string;
            autorId: string;
        })[];
        categorias: ({
            categoria: {
                id: string;
                nombre: string;
                creadoEn: Date;
                padreId: string | null;
                activa: boolean;
            };
        } & {
            libroId: string;
            categoriaId: string;
        })[];
    } & {
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
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearLibroDto & {
        autorIds?: string[];
        categoriaIds?: string[];
        recursosDigitales?: Array<{
            tipo: string;
            url: string;
            formato?: string;
        }>;
    }): import(".prisma/client").Prisma.Prisma__LibroClient<{
        editorial: {
            id: string;
            nombre: string | null;
            creadoEn: Date;
            pais: string | null;
        };
        recursosDigitales: {
            id: string;
            creadoEn: Date;
            libroId: string;
            tipo: string;
            url: string;
            formato: string | null;
        }[];
        autores: ({
            autor: {
                id: string;
                nombre: string | null;
                apellidos: string;
                creadoEn: Date;
                fotoUrl: string | null;
                nacionalidad: string | null;
                biografia: string | null;
                fechaNacimiento: Date | null;
            };
        } & {
            libroId: string;
            autorId: string;
        })[];
        categorias: ({
            categoria: {
                id: string;
                nombre: string;
                creadoEn: Date;
                padreId: string | null;
                activa: boolean;
            };
        } & {
            libroId: string;
            categoriaId: string;
        })[];
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarLibroDto & {
        autorIds?: string[];
        categoriaIds?: string[];
        recursosDigitales?: Array<{
            tipo: string;
            url: string;
            formato?: string;
        }>;
    }): import(".prisma/client").Prisma.Prisma__LibroClient<{
        editorial: {
            id: string;
            nombre: string | null;
            creadoEn: Date;
            pais: string | null;
        };
        recursosDigitales: {
            id: string;
            creadoEn: Date;
            libroId: string;
            tipo: string;
            url: string;
            formato: string | null;
        }[];
        autores: ({
            autor: {
                id: string;
                nombre: string | null;
                apellidos: string;
                creadoEn: Date;
                fotoUrl: string | null;
                nacionalidad: string | null;
                biografia: string | null;
                fechaNacimiento: Date | null;
            };
        } & {
            libroId: string;
            autorId: string;
        })[];
        categorias: ({
            categoria: {
                id: string;
                nombre: string;
                creadoEn: Date;
                padreId: string | null;
                activa: boolean;
            };
        } & {
            libroId: string;
            categoriaId: string;
        })[];
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__LibroClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    buscar(termino: string, pagina?: number, porPagina?: number): Promise<{
        data: ({
            editorial: {
                id: string;
                nombre: string | null;
                creadoEn: Date;
                pais: string | null;
            };
            ejemplares: {
                id: string;
                estado: string;
                codigoBarras: string;
                ubicacion: string;
                fechaAdquisicion: Date;
            }[];
            autores: ({
                autor: {
                    id: string;
                    nombre: string | null;
                    apellidos: string;
                    creadoEn: Date;
                    fotoUrl: string | null;
                    nacionalidad: string | null;
                    biografia: string | null;
                    fechaNacimiento: Date | null;
                };
            } & {
                libroId: string;
                autorId: string;
            })[];
            categorias: ({
                categoria: {
                    id: string;
                    nombre: string;
                    creadoEn: Date;
                    padreId: string | null;
                    activa: boolean;
                };
            } & {
                libroId: string;
                categoriaId: string;
            })[];
        } & {
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
        })[];
        total: number;
        pagina: number;
        porPagina: number;
        totalPaginas: number;
    }>;
};
//# sourceMappingURL=libro.repository.d.ts.map