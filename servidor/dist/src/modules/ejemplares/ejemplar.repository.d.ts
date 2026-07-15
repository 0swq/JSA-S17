import { CrearEjemplarDto, ActualizarEjemplarDto } from './ejemplar.dto';
export declare const ejemplarRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    obtenerPorLibro(libroId: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__EjemplarClient<{
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
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearEjemplarDto): import(".prisma/client").Prisma.Prisma__EjemplarClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        codigoBarras: string;
        ubicacion: string | null;
        fechaAdquisicion: Date | null;
        libroId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarEjemplarDto): import(".prisma/client").Prisma.Prisma__EjemplarClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        codigoBarras: string;
        ubicacion: string | null;
        fechaAdquisicion: Date | null;
        libroId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__EjemplarClient<{
        id: string;
        creadoEn: Date;
        estado: string;
        codigoBarras: string;
        ubicacion: string | null;
        fechaAdquisicion: Date | null;
        libroId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=ejemplar.repository.d.ts.map