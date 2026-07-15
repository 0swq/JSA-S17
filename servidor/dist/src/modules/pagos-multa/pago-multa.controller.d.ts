import { Request, Response, NextFunction } from 'express';
export declare const pagoMultaControlador: {
    obtenerTodos(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorMulta(req: Request, res: Response, next: NextFunction): Promise<void>;
    obtenerPorId(req: Request, res: Response, next: NextFunction): Promise<void>;
    crear(req: Request, res: Response, next: NextFunction): Promise<void>;
    actualizar(req: Request, res: Response, next: NextFunction): Promise<void>;
    eliminar(req: Request, res: Response, next: NextFunction): Promise<void>;
};
//# sourceMappingURL=pago-multa.controller.d.ts.map