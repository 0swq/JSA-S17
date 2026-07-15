import { Request, Response, NextFunction } from 'express';
export declare const resenaControlador: {
    obtenerPorLibro(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    misResenas(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=resena.controller.d.ts.map