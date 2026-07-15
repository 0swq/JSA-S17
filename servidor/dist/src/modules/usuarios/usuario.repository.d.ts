import { ActualizarUsuarioDto, CrearUsuarioDto } from "@modules/usuarios/usuario.dto";
export declare const usuarioRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<({
        rol: {
            id: string;
            nombre: string;
            creadoEn: Date;
            descripcion: string | null;
        };
    } & {
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        creadoEn: Date;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<{
        rol: {
            id: string;
            nombre: string;
            creadoEn: Date;
            descripcion: string | null;
        };
    } & {
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        creadoEn: Date;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    obtenerPorCorreoConHash(correo: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<{
        rol: {
            id: string;
            nombre: string;
            creadoEn: Date;
            descripcion: string | null;
        };
    } & {
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    obtenerRolPorNombre(nombre: string): import(".prisma/client").Prisma.Prisma__RolClient<{
        id: string;
        nombre: string;
        creadoEn: Date;
        descripcion: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: Omit<CrearUsuarioDto, "password"> & {
        passwordHash?: string;
    }): import(".prisma/client").Prisma.Prisma__UsuarioClient<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: Omit<ActualizarUsuarioDto, "password"> & {
        passwordHash?: string;
    }): import(".prisma/client").Prisma.Prisma__UsuarioClient<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=usuario.repository.d.ts.map