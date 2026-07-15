import { Request, Response, NextFunction } from 'express';
export declare const recursoDigitalControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorLibro(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=recurso-digital.controller.d.ts.map