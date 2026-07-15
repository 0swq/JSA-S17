import { Request, Response, NextFunction } from 'express';
export declare const prestamoControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    misPrestamos(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=prestamo.controller.d.ts.map