import { Request, Response, NextFunction } from 'express';
export declare const usuarioControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    perfilPropio(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** Devuelve { id, nombre, apellidos, correo } del usuario — público para autenticados */
    obtenerNombrePorId(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=usuario.controller.d.ts.map