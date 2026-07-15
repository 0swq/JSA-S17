import { Request, Response, NextFunction } from 'express';
export declare const favoritoControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorUsuario(req: Request, res: Response, next: NextFunction): Promise<void>;
    misFavoritos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=favorito.controller.d.ts.map