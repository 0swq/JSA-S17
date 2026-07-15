import { ActualizarUsuarioDto, CrearUsuarioDto } from "@modules/usuarios/usuario.dto";
export declare const usuarioServicio: {
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
    obtenerPorId(id: string): Promise<{
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
    }>;
    crear(data: CrearUsuarioDto): Promise<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }>;
    actualizar(id: string, data: ActualizarUsuarioDto): Promise<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }>;
    eliminar(id: string): Promise<{
        id: string;
        correo: string | null;
        rolId: string;
        nombre: string | null;
        apellidos: string | null;
        dni: string | null;
        passwordHash: string | null;
        creadoEn: Date;
    }>;
    login(correo: string, password: string): Promise<{
        token: string;
        usuario: {
            rol: {
                id: string;
                nombre: string;
                creadoEn: Date;
                descripcion: string | null;
            };
            id: string;
            correo: string | null;
            rolId: string;
            nombre: string | null;
            apellidos: string | null;
            dni: string | null;
            creadoEn: Date;
        };
    }>;
};
//# sourceMappingURL=usuario.service.d.ts.map