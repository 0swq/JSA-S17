"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libroRepositorio = void 0;
// @ts-nocheck
const prisma_1 = require("../prisma");
exports.libroRepositorio = {
    obtenerTodos(filtros = {}) {
        const where = {};
        if (filtros.titulo)
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        if (filtros.isbn)
            where.isbn = { contains: filtros.isbn, mode: 'insensitive' };
        if (filtros.editorialId)
            where.editorialId = filtros.editorialId;
        if (filtros.publicado !== undefined)
            where.publicado = filtros.publicado;
        if (filtros.anioPublicacion)
            where.anioPublicacion = filtros.anioPublicacion;
        if (filtros.autorId)
            where.autores = { some: { autorId: filtros.autorId } };
        if (filtros.categoriaId)
            where.categorias = { some: { categoriaId: filtros.categoriaId } };
        const pagina = filtros.pagina ?? 1;
        const porPagina = filtros.porPagina; // undefined = sin límite
        const queryOptions = {
            where,
            include: {
                editorial: true,
                autores: { include: { autor: true } },
                categorias: { include: { categoria: true } },
                ejemplares: { select: { id: true, codigoBarras: true, estado: true, ubicacion: true, fechaAdquisicion: true } },
            },
            orderBy: { creadoEn: 'desc' },
        };
        if (porPagina !== undefined) {
            queryOptions.skip = (pagina - 1) * porPagina;
            queryOptions.take = porPagina;
        }
        return prisma_1.prisma.libro.findMany(queryOptions);
    },
    obtenerPorId(id) {
        return prisma_1.prisma.libro.findUnique({
            where: { id },
            include: {
                editorial: true,
                autores: { include: { autor: true } },
                categorias: { include: { categoria: true } },
                ejemplares: { select: { id: true, codigoBarras: true, estado: true, ubicacion: true, fechaAdquisicion: true } },
                recursosDigitales: true,
            },
        });
    },
    crear(data) {
        const { autorIds, categoriaIds, recursosDigitales, ...libroData } = data;
        return prisma_1.prisma.libro.create({
            data: {
                ...libroData,
                ...(autorIds?.length ? {
                    autores: {
                        create: autorIds.map((autorId) => ({ autorId })),
                    },
                } : {}),
                ...(categoriaIds?.length ? {
                    categorias: {
                        create: categoriaIds.map((categoriaId) => ({ categoriaId })),
                    },
                } : {}),
                ...(recursosDigitales?.length ? {
                    recursosDigitales: {
                        create: recursosDigitales,
                    },
                } : {}),
            },
            include: {
                editorial: true,
                autores: { include: { autor: true } },
                categorias: { include: { categoria: true } },
                recursosDigitales: true,
            },
        });
    },
    actualizar(id, data) {
        const { autorIds, categoriaIds, recursosDigitales, ...libroData } = data;
        // Construir la parte de relaciones solo si se enviaron
        const updateData = { ...libroData };
        if (autorIds !== undefined) {
            updateData.autores = {
                deleteMany: {},
                create: autorIds.map((autorId) => ({ autorId })),
            };
        }
        if (categoriaIds !== undefined) {
            updateData.categorias = {
                deleteMany: {},
                create: categoriaIds.map((categoriaId) => ({ categoriaId })),
            };
        }
        if (recursosDigitales !== undefined) {
            updateData.recursosDigitales = {
                deleteMany: {},
                create: recursosDigitales,
            };
        }
        return prisma_1.prisma.libro.update({
            where: { id },
            data: updateData,
            include: {
                editorial: true,
                autores: { include: { autor: true } },
                categorias: { include: { categoria: true } },
                recursosDigitales: true,
            },
        });
    },
    eliminar(id) {
        return prisma_1.prisma.libro.delete({ where: { id } });
    },
    async buscar(termino, pagina = 1, porPagina = 10) {
        const offset = (pagina - 1) * porPagina;
        // plainto_tsquery usa & (AND). Convertimos a | (OR) para buscar cualquier palabra
        const palabras = termino.trim().split(/\s+/).filter(Boolean);
        const tsqueryStr = palabras.map(p => `'${p.replace(/'/g, "''")}'`).join(' | ');
        console.log('[FTS] palabras:', palabras.length, '| tsquery:', tsqueryStr.substring(0, 200));
        const [filas, totalResult] = await Promise.all([
            prisma_1.prisma.$queryRaw `
                SELECT l.id,
                       ts_rank(l.busqueda_fts, to_tsquery('spanish', ${tsqueryStr})) as rank
                FROM "libro" l
                WHERE l.busqueda_fts @@ to_tsquery('spanish', ${tsqueryStr})
                ORDER BY rank DESC
                LIMIT ${porPagina}
                OFFSET ${offset}
            `,
            prisma_1.prisma.$queryRaw `
                SELECT COUNT(*) as count
                FROM "libro"
                WHERE busqueda_fts @@ to_tsquery('spanish', ${tsqueryStr})
            `,
        ]);
        console.log('[FTS] resultados:', filas.length, 'total:', Number(totalResult[0].count));
        const total = Number(totalResult[0].count);
        const rankPorId = new Map(filas.map(f => [f.id, f.rank]));
        const data = filas.length > 0
            ? await prisma_1.prisma.libro.findMany({
                where: { id: { in: [...rankPorId.keys()] } },
                include: {
                    editorial: true,
                    autores: { include: { autor: true } },
                    categorias: { include: { categoria: true } },
                    ejemplares: { select: { id: true, codigoBarras: true, estado: true, ubicacion: true, fechaAdquisicion: true } },
                },
            })
            : [];
        // Mantener el orden por rank de FTS
        data.sort((a, b) => (rankPorId.get(b.id) ?? 0) - (rankPorId.get(a.id) ?? 0));
        return {
            data,
            total,
            pagina,
            porPagina,
            totalPaginas: Math.ceil(total / porPagina),
        };
    },
};
//# sourceMappingURL=libro.repository.js.map