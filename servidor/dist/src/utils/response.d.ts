import { Response } from 'express';
export declare const sendSuccess: (res: Response, data: any, message?: string, statusCode?: number) => Response<any, Record<string, any>>;
export declare const sendPaginated: (res: Response, items: any[], total: number, page: number, limit: number) => Response<any, Record<string, any>>;
//# sourceMappingURL=response.d.ts.map