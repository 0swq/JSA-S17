"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libroServicio = void 0;
// @ts-nocheck
const ApiError_1 = require("@utils/ApiError");
const libro_repository_1 = require("./libro.repository");
const ia_service_1 = require("@modules/ia/ia.service");
exports.libroServicio = {
    async obtenerTodos(filtros = {}) {
        const pagina = filtros.pagina ?? 1;
        const porPagina = filtros.porPagina; // undefined = sin límite
        const data = await libro_repository_1.libroRepositorio.obtenerTodos(filtros);
        return { data, pagina, porPagina };
    },
    async obtenerPorId(id) {
        const libro = await libro_repository_1.libroRepositorio.obtenerPorId(id);
        if (!libro)
            throw ApiError_1.ApiError.noEncontrado('Libro no encontrado');
        return libro;
    },
    crear(data) {
        return libro_repository_1.libroRepositorio.crear(data);
    },
    async actualizar(id, data) {
        await this.obtenerPorId(id);
        return libro_repository_1.libroRepositorio.actualizar(id, data);
    },
    async eliminar(id) {
        await this.obtenerPorId(id);
        await libro_repository_1.libroRepositorio.eliminar(id);
    },
    async solicitarGrafo(termino) {
        const resultado = await this.buscar(termino, 1, 50);
        const libros = resultado.data;
        if (!libros || libros.length === 0) {
            return { nodes: [], edges: [], ordenLectura: [] };
        }
        const librosFormateados = libros.map((l) => ({
            id: l.id,
            titulo: l.titulo,
            descripcion: l.descripcion ?? '',
            isbn: l.isbn ?? '',
            anio: l.anioPublicacion ?? '',
            idioma: l.idioma ?? '',
            editorial: l.editorial?.nombre ?? '',
            autores: (l.autores ?? []).map((a) => `${a.autor?.nombre ?? ''} ${a.autor?.apellidos ?? ''}`.trim()),
            categorias: (l.categorias ?? []).map((c) => c.categoria?.nombre ?? ''),
        }));
        const sistema = `Eres un asistente experto en bibliotecas universitarias y análisis de conocimiento.

Tu tarea es analizar una consulta de investigación de un estudiante y un conjunto de libros disponibles en una biblioteca.

Debes:
1. Evaluar qué libros son más relevantes para resolver la necesidad del estudiante.
2. Asignar una puntuación de relevancia del 0 al 100 a cada libro.
3. Explicar brevemente por qué cada libro puede ayudar.
4. Crear relaciones entre libros o temas cuando exista una conexión conceptual.
5. Generar un grafo de conocimiento en formato JSON compatible con Vis Network.
6. Sugerir un orden de lectura de los libros incluidos, del más fundamental al más avanzado.

Reglas:
- No inventes libros que no estén en la lista.
- Usa únicamente la información proporcionada.
- La relevancia debe basarse en la relación entre la solicitud del usuario y la descripción del libro.
- Máximo 3 niveles de profundidad en las relaciones.
- Todo libro incluido en "nodes" DEBE tener al menos una conexión en "edges" (como "from" o "to"). No incluyas libros aislados sin relación con ningún otro nodo o tema.
- Si un libro es relevante para la consulta pero no tiene ninguna relación conceptual con otros libros de la lista, NO lo incluyas en el grafo.
- Prioriza incluir libros que formen cadenas o grupos temáticos que le permitan al estudiante continuar su investigación una vez terminado un libro (ej: introductorio -> intermedio -> avanzado).
- "ordenLectura" debe incluir únicamente los mismos ids presentes en "nodes", ordenados del más fundamental al más especializado.
- El campo "posicion" en "ordenLectura" debe ser un entero consecutivo empezando en 1, sin saltos ni repeticiones.
- Devuelve únicamente JSON válido, sin explicaciones adicionales.

Formato de salida obligatorio:

{
  "nodes": [],
  "edges": [],
  "ordenLectura": []
}

Estructura de nodo:

{
  "id": "id_del_libro",
  "label": "titulo",
  "group": "libro",
  "value": relevancia,
  "data": {
    "razon": "motivo de recomendación"
  }
}

Estructura de conexión:

{
  "from": "id_origen",
  "to": "id_destino"
}

Estructura de orden de lectura:

{
  "id": "id_del_libro",
  "posicion": 1,
  "motivo": "breve justificación de por qué va en este punto de la secuencia"
}`;
        const prompt = `Consulta de investigación: "${termino}"

Libros disponibles:
        ${JSON.stringify(librosFormateados, null, 2)}`;
        const respuesta = await ia_service_1.iaServicio.completar(sistema, prompt);
        console.log('[IA grafo respuesta]:', respuesta.substring(0, 400));
        const match = respuesta.match(/\{[\s\S]*\}/);
        if (!match) {
            console.error('[IA grafo] No se encontró JSON en la respuesta');
            return { nodes: [], edges: [], ordenLectura: [] };
        }
        const { nodes, edges, ordenLectura } = JSON.parse(match[0]);
        console.log('[IA grafo] nodes:', nodes?.length, 'edges:', edges?.length, 'orden:', ordenLectura?.length);
        const idsConectados = new Set();
        (edges ?? []).forEach((e) => {
            idsConectados.add(e.from);
            idsConectados.add(e.to);
        });
        const nodesFiltrados = (nodes ?? []).filter((n) => idsConectados.has(n.id));
        const edgesFiltrados = (edges ?? []).filter((e) => idsConectados.has(e.from) && idsConectados.has(e.to));
        const ordenLecturaFiltrado = (ordenLectura ?? [])
            .filter((o) => idsConectados.has(o.id))
            .sort((a, b) => a.posicion - b.posicion);
        return {
            nodes: nodesFiltrados,
            edges: edgesFiltrados,
            ordenLectura: ordenLecturaFiltrado,
        };
    },
    async buscar(termino, pagina = 1, porPagina = 10) {
        let terminoMejorado = termino.replace(/[^\w\sáéíóúñü]/gi, '');
        try {
            const respuesta = await ia_service_1.iaServicio.completar(`Eres un asistente de búsqueda para una biblioteca. El usuario buscará un tema o concepto ESPECÍFICO.
         Tu tarea es expandir ese término con sinónimos, subtemas y conceptos ESTRECHAMENTE RELACIONADOS al tema exacto que el usuario busca.
         NO incluyas términos genéricos de la categoría padre ni temas tangenciales.
         Ejemplo: si buscan "java", devuelve términos como "jvm", "spring boot", "jakarta ee", "maven", "gradle", NO "python", "javascript", "programación".
         Ejemplo: si buscan "cálculo", devuelve "derivadas", "integrales", "límites", NO "álgebra", "estadística".
         Devuelve SOLO un JSON. Formato estricto: { "terminos": ["palabra1", "palabra2", ...] }
         Sin explicaciones ni markdown.`, termino);
            const { terminos } = JSON.parse(respuesta);
            terminoMejorado = [...terminos, termino]
                .join(' ')
                .replace(/[^\w\sáéíóúñü]/gi, '');
        }
        catch (err) {
        }
        return libro_repository_1.libroRepositorio.buscar(terminoMejorado, pagina, porPagina);
    },
};
//# sourceMappingURL=libro.service.js.map