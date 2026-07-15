import { CrearConfiguracionMultaDto, ActualizarConfiguracionMultaDto } from './configuracion-multa.dto';
export declare const configuracionMultaRepositorio: {
    obtener(): import(".prisma/client").Prisma.Prisma__ConfiguracionMultaClient<{
        id: string;
        creadoEn: Date;
        tarifaDiaria: import("@prisma/client-runtime-utils").Decimal;
        diasMaxPrestamo: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    obtenerPorId(id: string): import(".prisma/client").Prisma.Prisma__ConfiguracionMultaClient<{
        id: string;
        creadoEn: Date;
        tarifaDiaria: import("@prisma/client-runtime-utils").Decimal;
        diasMaxPrestamo: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    crear(data: CrearConfiguracionMultaDto): import(".prisma/client").Prisma.Prisma__ConfiguracionMultaClient<{
        id: string;
        creadoEn: Date;
        tarifaDiaria: import("@prisma/client-runtime-utils").Decimal;
        diasMaxPrestamo: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    actualizar(id: string, data: ActualizarConfiguracionMultaDto): import(".prisma/client").Prisma.Prisma__ConfiguracionMultaClient<{
        id: string;
        creadoEn: Date;
        tarifaDiaria: import("@prisma/client-runtime-utils").Decimal;
        diasMaxPrestamo: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
};
//# sourceMappingURL=configuracion-multa.repository.d.ts.map