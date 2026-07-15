import { Request, Response, NextFunction } from 'express';
export declare const libroControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
    solicitarGrafo(req: Request, res: Response, next: NextFunction): Promise<void>;
    buscar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=libro.controller.d.ts.map