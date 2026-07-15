import { CrearPagoMultaDto, ActualizarPagoMultaDto } from './pago-multa.dto';
export declare const pagoMultaRepositorio: {
    obtenerTodos(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    }[]>;
    obtenerPorMulta(multaId: string): import(".prisma/client").Prisma.PrismaPromise<({
        multa: {
            id: string;
            creadoEn: Date;
            estado: string;
            prestamoId: string;
            monto: import("@prisma/client-runtime-utils").Decimal;
            diasMora: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    })[]>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__PagoMultaClient<{
        multa: {
            id: string;
            creadoEn: Date;
            estado: string;
            prestamoId: string;
            monto: import("@prisma/client-runtime-utils").Decimal;
            diasMora: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearPagoMultaDto): import(".prisma/client").Prisma.Prisma__PagoMultaClient<{
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarPagoMultaDto): import(".prisma/client").Prisma.Prisma__PagoMultaClient<{
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    eliminar(id: string): import(".prisma/client").Prisma.Prisma__PagoMultaClient<{
        id: string;
        creadoEn: Date;
        multaId: string;
        montoPagado: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=pago-multa.repository.d.ts.map