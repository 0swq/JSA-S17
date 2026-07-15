import { CrearHistorialDto } from './historial.dto';
export declare const historialRepositorio: {
    obtenerTodos(filtros?: {
        hechoPorId?: string;
        modulo?: string;
        nombreAccion?: string;
        accion?: string;
        buscar?: string;
        desde?: Date;
        hasta?: Date;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        hechoPor: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        nombreAccion: string;
        accion: string;
        hechoPorId: string;
        modulo: string | null;
        ipUsuario: string | null;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__HistorialClient<{
        hechoPor: {
            id: string;
            correo: string;
            nombre: string;
            apellidos: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        nombreAccion: string;
        accion: string;
        hechoPorId: string;
        modulo: string | null;
        ipUsuario: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearHistorialDto): import(".prisma/client").Prisma.Prisma__HistorialClient<{
        id: string;
        creadoEn: Date;
        nombreAccion: string;
        accion: string;
        hechoPorId: string;
        modulo: string | null;
        ipUsuario: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=historial.repository.d.ts.map