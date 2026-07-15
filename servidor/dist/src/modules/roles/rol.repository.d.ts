import { CrearRolDto, ActualizarRolDto } from './rol.dto';
export declare const rolRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<({
        usuarios: {
            id: string;
            correo: string | null;
            rolId: string;
            nombre: string | null;
            apellidos: string | null;
            dni: string | null;
            passwordHash: string | null;
            creadoEn: Date;
        }[];
    } & {
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__RolClient<{
        usuarios: {
            id: string;
            correo: string | null;
            rolId: string;
            nombre: string | null;
            apellidos: string | null;
            dni: string | null;
            passwordHash: string | null;
            creadoEn: Date;
        }[];
    } & {
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearRolDto): import(".prisma/client").Prisma.Prisma__RolClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarRolDto): import(".prisma/client").Prisma.Prisma__RolClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__RolClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=rol.repository.d.ts.map