import { CrearRecursoDigitalDto, ActualizarRecursoDigitalDto } from './recurso-digital.dto';
export declare const recursoDigitalRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<({
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    })[]>;
    obtenerPorLibro(libroId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    }[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__RecursoDigitalClient<{
        libro: {
            id: string;
            titulo: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearRecursoDigitalDto): import(".prisma/client").Prisma.Prisma__RecursoDigitalClient<{
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarRecursoDigitalDto): import(".prisma/client").Prisma.Prisma__RecursoDigitalClient<{
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__RecursoDigitalClient<{
        id: string;
        creadoEn: Date;
        libroId: string;
        tipo: string;
        url: string;
        formato: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=recurso-digital.repository.d.ts.map