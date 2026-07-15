import { CrearMultaDto, ActualizarMultaDto } from './multa.dto';
export declare const multaRepositorio: {
    obtenerTodos(filtros?: {
        estado?: string;
        usuarioId?: string;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        prestamo: {
            usuario: {
                id: string;
                correo: string;
                nombre: string;
                apellidos: string;
            };
            ejemplar: {
                libro: {
                    id: string;
                    titulo: string;
                };
            } & {
                id: string;
                creadoEn: Date;
                estado: string;
                codigoBarras: string;
                ubicacion: string | null;
                fechaAdquisicion: Date | null;
                libroId: string;
            };
        } & {
            id: string;
            creadoEn: Date;
            usuarioId: string;
            ejemplarId: string;
            fechaMaxDevolucion: Date;
            fechaDevolucion: Date | null;
            estado: string;
        };
        pagos: {
            id: string;
            creadoEn: Date;
            multaId: string;
            montoPagado: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: string;
        }[];
    } & {
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    })[]>;
    obtenerPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<({
        prestamo: {
            usuario: {
                id: string;
                correo: string;
                nombre: string;
                apellidos: string;
            };
            ejemplar: {
                libro: {
                    id: string;
                    titulo: string;
                };
            } & {
                id: string;
                creadoEn: Date;
                estado: string;
                codigoBarras: string;
                ubicacion: string | null;
                fechaAdquisicion: Date | null;
                libroId: string;
            };
        } & {
            id: string;
            creadoEn: Date;
            usuarioId: string;
            ejemplarId: string;
            fechaMaxDevolucion: Date;
            fechaDevolucion: Date | null;
            estado: string;
        };
        pagos: {
            id: string;
            creadoEn: Date;
            multaId: string;
            montoPagado: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: string;
        }[];
    } & {
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__MultaClient<{
        prestamo: {
            usuario: {
                id: string;
                correo: string;
                nombre: string;
                apellidos: string;
                dni: string;
            };
            ejemplar: {
                libro: {
                    editorial: {
                        id: string;
                        nombre: string;
                    };
                    autores: ({
                        autor: {
                            id: string;
                            nombre: string;
                            apellidos: string;
                        };
                    } & {
                        libroId: string;
                        autorId: string;
                    })[];
                    categorias: ({
                        categoria: {
                            id: string;
                            nombre: string;
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
                };
            } & {
                id: string;
                creadoEn: Date;
                estado: string;
                codigoBarras: string;
                ubicacion: string | null;
                fechaAdquisicion: Date | null;
                libroId: string;
            };
        } & {
            id: string;
            creadoEn: Date;
            usuarioId: string;
            ejemplarId: string;
            fechaMaxDevolucion: Date;
            fechaDevolucion: Date | null;
            estado: string;
        };
        pagos: {
            id: string;
            creadoEn: Date;
            multaId: string;
            montoPagado: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: string;
        }[];
    } & {
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearMultaDto): import(".prisma/client").Prisma.Prisma__MultaClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarMultaDto): import(".prisma/client").Prisma.Prisma__MultaClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__MultaClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        prestamoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        diasMora: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=multa.repository.d.ts.map