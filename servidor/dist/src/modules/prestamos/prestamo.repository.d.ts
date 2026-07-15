import { CrearPrestamoDto, ActualizarPrestamoDto } from './prestamo.dto';
export declare const prestamoRepositorio: {
    obtenerTodos(filtros?: {
        estado?: string;
        usuarioId?: string;
        ejemplarId?: string;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        usuario: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
            dni: string;
        };
        ejemplar: {
            libro: {
                id: string;
                titulo: string;
                fotoUrl: string;
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
        multa: {
            id: string;
            creadoEn: Date;
            estado: string;
            prestamoId: string;
            monto: import("@prisma/client-runtime-utils").Decimal;
            diasMora: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    })[]>;
    obtenerPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<({
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
        multa: {
            id: string;
            creadoEn: Date;
            estado: string;
            prestamoId: string;
            monto: import("@prisma/client-runtime-utils").Decimal;
            diasMora: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__PrestamoClient<{
        usuario: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
            dni: string;
        };
        ejemplar: {
            libro: {
                id: string;
                titulo: string;
                fotoUrl: string;
                autores: ({
                    autor: {
                        nombre: string;
                        apellidos: string;
                    };
                } & {
                    libroId: string;
                    autorId: string;
                })[];
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
        multa: {
            id: string;
            creadoEn: Date;
            estado: string;
            prestamoId: string;
            monto: import("@prisma/client-runtime-utils").Decimal;
            diasMora: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearPrestamoDto): import(".prisma/client").Prisma.Prisma__PrestamoClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarPrestamoDto): import(".prisma/client").Prisma.Prisma__PrestamoClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__PrestamoClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        fechaMaxDevolucion: Date;
        fechaDevolucion: Date | null;
        estado: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=prestamo.repository.d.ts.map