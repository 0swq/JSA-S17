import { CrearLibroDto, ActualizarLibroDto, RespuestaLibroDto } from './libro.dto';
export declare const libroServicio: {
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
    }): Promise<{
        data: {
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
        pagina: number;
        porPagina: number;
    }>;
    obtenerPorId(id: string): Promise<RespuestaLibroDto>;
    crear(data: CrearLibroDto): Promise<RespuestaLibroDto>;
    actualizar(id: string, data: ActualizarLibroDto): Promise<RespuestaLibroDto>;
    eliminar(id: string): Promise<void>;
    solicitarGrafo(termino: string): Promise<{
        nodes: any[];
        edges: any[];
        ordenLectura: any[];
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
//# sourceMappingURL=libro.service.d.ts.map