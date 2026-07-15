import { CrearReservaDto, ActualizarReservaDto } from './reserva.dto';
export declare const reservaRepositorio: {
    obtenerTodos(filtros?: {
        estado?: string;
        usuarioId?: string;
        libroId?: string;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        usuario: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
        };
        ejemplar: {
            id: string;
            estado: string;
            codigoBarras: string;
        };
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    })[]>;
    contarActivasPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<number>;
    obtenerPorUsuario(usuarioId: string): import(".prisma/client").Prisma.PrismaPromise<({
        ejemplar: {
            id: string;
            estado: string;
            codigoBarras: string;
        };
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__ReservaClient<{
        usuario: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
        };
        ejemplar: {
            id: string;
            estado: string;
            codigoBarras: string;
        };
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearReservaDto): import(".prisma/client").Prisma.Prisma__ReservaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarReservaDto): import(".prisma/client").Prisma.Prisma__ReservaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__ReservaClient<{
        id: string;
        creadoEn: Date;
        usuarioId: string;
        ejemplarId: string;
        estado: string;
        libroId: string;
        fechaExpiracion: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=reserva.repository.d.ts.map