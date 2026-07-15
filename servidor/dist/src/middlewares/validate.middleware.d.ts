import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
export declare const validar: (schema: Schema, property?: "body" | "query" | "params") => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate.middleware.d.ts.map