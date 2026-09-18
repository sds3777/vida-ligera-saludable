export type Material = {
  id: string;
  title: string;
  cover: string;
  pdfUrl: string;
  pages: number;
  /** Vista previa parcial en /demo: número de páginas visibles antes del bloqueo. */
  previewPages?: number;
  /** Resalta visualmente la tarjeta en la librería (sin la etiqueta "Material principal"). */
  isFeatured?: boolean;
};

export const materials: Material[] = [
  {
    id: "recetas-grasa-higado",
    title: "Recetario Alimentación RFS — ¿Tienes hígado graso?",
    cover: "/covers/00-recetas-grasa-higado.webp",
    pdfUrl: "/materials/00-recetas-grasa-higado.pdf",
    pages: 77,
    previewPages: 20,
    isFeatured: true,
  },
  {
    id: "plan-21-dias",
    title: "Plan Alimentario: Desafío de 21 Días",
    cover: "/covers/03-plan-alimentario-21-dias.webp",
    pdfUrl: "/materials/03-plan-alimentario-21-dias.pdf",
    pages: 20,
  },
  {
    id: "mounjaro-natural",
    title: "Té Casero Mounjaro Natural",
    cover: "/covers/04-te-casero-mounjaro-natural.webp",
    pdfUrl: "/materials/04-te-casero-mounjaro-natural.pdf",
    pages: 25,
  },
  {
    id: "batidos-nutritivos",
    title: "Batidos Nutritivos para una Vida Activa",
    cover: "/covers/05-batidos-nutritivos.webp",
    pdfUrl: "/materials/05-batidos-nutritivos.pdf",
    pages: 55,
  },
  {
    id: "zumos-detox",
    title: "20 Zumos Detox Saludables",
    cover: "/covers/06-zumos-detox-saludables.webp",
    pdfUrl: "/materials/06-zumos-detox-saludables.pdf",
    pages: 30,
  },
  {
    id: "freidora-aire",
    title: "50 Recetas sin Azúcar y sin Gluten para Freidora de Aire",
    cover: "/covers/07-recetas-sin-azucar-sin-gluten-freidora-aire.webp",
    pdfUrl: "/materials/07-recetas-sin-azucar-sin-gluten-freidora-aire.pdf",
    pages: 58,
  },
  {
    id: "bajas-carbohidratos",
    title: "100 Recetas Bajas en Carbohidratos",
    cover: "/covers/08-recetas-bajas-carbohidratos.webp",
    pdfUrl: "/materials/08-recetas-bajas-carbohidratos.pdf",
    pages: 117,
  },
  {
    id: "postres-sin-azucar",
    title: "Dulces y Postres sin Azúcar",
    cover: "/covers/09-dulces-postres-sin-azucar.webp",
    pdfUrl: "/materials/09-dulces-postres-sin-azucar.pdf",
    pages: 41,
  },
  {
    id: "controlar-antojos",
    title: "5 Recetas Saludables para Controlar los Antojos",
    cover: "/covers/10-recetas-controlar-antojos.webp",
    pdfUrl: "/materials/10-recetas-controlar-antojos.pdf",
    pages: 6,
  },
  {
    id: "alimentacion-diabetes",
    title: "Guía de Alimentación para Personas con Diabetes Tipo 2",
    cover: "/covers/01-guia-alimentacion-diabetes.webp",
    pdfUrl: "/materials/01-guia-alimentacion-diabetes.pdf",
    pages: 75,
  },
  {
    id: "alimentacion-saludable",
    title: "Guía Completa de Alimentación Saludable",
    cover: "/covers/02-guia-alimentacion-saludable.webp",
    pdfUrl: "/materials/02-guia-alimentacion-saludable.pdf",
    pages: 88,
  },
];

export const unlockCopy = {
  title: "DESBLOQUEA LA BIBLIOTECA COMPLETA",
  subtitle: "Recetario Hígado Graso + 10 bonos exclusivos",
  featuredLabel: "PRODUCTO PRINCIPAL",
  featuredTitle: "100+ Recetas para Hígado Graso",
  bonusesTitle: "10 BONOS INCLUIDOS",
  bonuses: [
    "🩺 Alimentación para Diabetes",
    "🥗 Alimentación Saludable",
    "📅 Plan de 21 Días",
    "🍵 Té Casero Mounjaro",
    "🥤 Batidos Nutritivos",
    "🧃 Zumos Detox",
    "🍟 Recetas para Freidora de Aire",
    "🍚 Recetas Bajas en Carbohidratos",
    "🍰 Postres sin Azúcar",
    "🍎 Recetas para Controlar Antojos",
  ],
  priceAnchor: "49,90 €",
  price: "9,90 €",
  priceNote: "Pago único · Acceso de por vida",
  text: "Realiza la aportación que prefieras entre las opciones enviadas. En cuanto se confirme, recibirás acceso completo a los 10 materiales complementarios.",
  buttonLabel: "DESBLOQUEAR TODO POR 9,90 €",
  continueLabel: "SEGUIR VIENDO LA MUESTRA",
};
