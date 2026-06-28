export type Product = {
  id: string;
  image: string;
  images?: string[];
  tag: string;
  name: string;
  description: string;
  price: string;
  category: string;
};

export const pasteleriaProducts: Product[] = [
  {
    id: "torta-brownie",
    image: "/images/productos/torta-merengue-chocolate.jpg",
    tag: "Torta",
    name: "Torta Brownie",
    description:
      "Sin harina. Base de chocolate, dulce de leche y merengue italiano.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "marquise",
    image: "/images/productos/torta-brownie-dulce-de-leche.jpg",
    tag: "Torta",
    name: "Marquise de chocolate",
    description: "Marquise de chocolate clásica.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "mousse-chocolate",
    image: "/images/productos/torta-mousse-chocolate.jpg",
    tag: "Torta",
    name: "Torta Mousse de Chocolate",
    description:
      "Sin harina. Base de chocolate y mousse de chocolate.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "cheesecake",
    image: "/images/productos/cheesecake-frutillas.jpg",
    images: [
      "/images/productos/cheesecake-frutillas.jpg",
      "/images/productos/cheesecake-frutos-rojos.jpg",
    ],
    tag: "Torta",
    name: "Cheesecake",
    description:
      "Base de galletitas, cheesecake y confitura de frambuesas o frutillas (según estación).",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "lemon-pie",
    image: "/images/productos/lemon-pie.jpg",
    images: [
      "/images/productos/lemon-pie.jpg",
      "/images/productos/lemon-pie-detalle.jpeg",
    ],
    tag: "Torta",
    name: "Lemon Pie",
    description:
      "Masa de tarta, relleno de limón y merengue italiano.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "torta-manzanas",
    image: "/images/productos/torta-manzana-almendras.jpg",
    tag: "Torta",
    name: "Torta de Manzanas",
    description: "Torta húmeda de manzanas.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "mousse-menta",
    image: "/images/productos/torta-brownie-mousse.jpg",
    tag: "Torta",
    name: "Torta Mousse de Menta",
    description:
      "Sin harina. Base de chocolate y mousse de menta.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "rogel",
    image: "/images/productos/torta-blanca-merengue.jpg",
    tag: "Torta",
    name: "Rogel",
    description:
      "Varias capas de masa rogel, dulce de leche y merengue italiano. De 18 a 20 cm de diámetro aprox.",
    price: "$40.000",
    category: "Tortas",
  },
  {
    id: "vasito-unidad",
    image: "/images/productos/vasitos-variados.jpg",
    images: [
      "/images/productos/vasitos-variados.jpg",
      "/images/productos/vasitos-mousse.jpg",
      "/images/productos/vasitos-chocotorta.jpg",
      "/images/productos/vasitos-mousse-variados.jpg",
    ],
    tag: "Vasito",
    name: "Vasitos",
    description:
      "Mousse de chocolate con brownie · Mousse de dulce de leche con brownie o merenguitos · Merengue con crema, dulce de leche y frutillas · Chocotorta.",
    price: "$3.000 c/u",
    category: "Vasitos",
  },
  {
    id: "vasitos-caja-16",
    image: "/images/productos/caja-vasitos-16.jpg",
    images: [
      "/images/productos/caja-vasitos-16.jpg",
      "/images/productos/vasitos-mousse-caja.jpg",
    ],
    tag: "Vasito",
    name: "Caja x 16 vasitos",
    description:
      "16 unidades de 2 sabores a elección. Mismas opciones que los vasitos individuales.",
    price: "$48.000",
    category: "Vasitos",
  },
  {
    id: "caja-alfajorcitos",
    image: "/images/productos/caja-dulce-variada.jpg",
    images: [
      "/images/productos/caja-dulce-variada.jpg",
      "/images/productos/caja-alfajores-brownies.jpg",
    ],
    tag: "Caja",
    name: "Caja de alfajorcitos y brownies",
    description: "90 unidades aprox.",
    price: "$35.000",
    category: "Cajas dulces",
  },
  {
    id: "caja-tarteletas",
    image: "/images/productos/tarteletas-variadas.jpg",
    tag: "Caja",
    name: "Caja de tarteletas",
    description:
      "40 unidades aprox. Lemon Pie, ganache de chocolate, dulce de leche y merengue italiano, dulce de leche y ganache de chocolate.",
    price: "$35.000",
    category: "Cajas dulces",
  },
  {
    id: "caja-mini-tortas",
    image: "/images/productos/caja-mini-tortas.jpg",
    images: [
      "/images/productos/caja-mini-tortas.jpg",
      "/images/productos/caja-mini-bocaditos.jpg",
    ],
    tag: "Caja",
    name: "Caja mini tortas",
    description:
      "Hasta 2 opciones por caja: mini marquise, rogelitos, mini torta brownie o cuadraditos de manzana.",
    price: "$45.000",
    category: "Cajas dulces",
  },
  {
    id: "scones-mini",
    image: "/images/productos/scones.jpg",
    tag: "Bolsita",
    name: "Scones mini",
    description: "24 unidades.",
    price: "$15.000",
    category: "Delicias en bolsitas",
  },
  {
    id: "cookies-chips",
    image: "/images/productos/cookies-chips-chocolate.jpg",
    tag: "Bolsita",
    name: "Cookies de chips de chocolate",
    description: "24 unidades.",
    price: "$15.000",
    category: "Delicias en bolsitas",
  },
];

export const decoProducts: Product[] = [
  {
    id: "jarrito-flores",
    image: "/images/productos/jarritos-ceramica-flores-silvestres.jpg",
    tag: "Cerámica",
    name: "Jarrito cerámica · Flores silvestres",
    description: "Jarrito de cerámica 8 x 8 cm. Varios diseños florales disponibles.",
    price: "$10.000 c/u",
    category: "Jarritos de cerámica",
  },
  {
    id: "jarrito-rosas",
    image: "/images/productos/jarritos-ceramica-rosas.jpg",
    tag: "Cerámica",
    name: "Jarrito cerámica · Rosas",
    description: "Jarrito de cerámica 8 x 8 cm con rosas.",
    price: "$10.000 c/u",
    category: "Jarritos de cerámica",
  },
  {
    id: "jarrito-infantiles",
    image: "/images/productos/jarritos-ceramica-ratoncitos.jpg",
    images: [
      "/images/productos/jarritos-ceramica-ratoncitos.jpg",
      "/images/productos/jarritos-ceramica-ratoncitos-2.jpg",
    ],
    tag: "Cerámica",
    name: "Jarrito cerámica · Infantiles",
    description: "Jarrito de cerámica 8 x 8 cm con diseño infantil.",
    price: "$10.000 c/u",
    category: "Jarritos de cerámica",
  },
  {
    id: "medallones-x2",
    image: "/images/productos/medallones-coca-light.jpg",
    tag: "Medallones",
    name: "Medallones para termos y jarras",
    description: "Set de 2 medallones para identificar termos y jarras.",
    price: "$15.000",
    category: "Medallones",
  },
  {
    id: "medallones-x3",
    image: "/images/productos/medallones-te-leche-cafe.jpg",
    images: [
      "/images/productos/medallones-te-leche-cafe.jpg",
      "/images/productos/medallones-termos-agua.jpg",
    ],
    tag: "Medallones",
    name: "Medallones para termos y jarras · x3",
    description: "Set de 3 medallones con termo a juego.",
    price: "$20.000",
    category: "Medallones",
  },
  {
    id: "dulceras",
    image: "/images/productos/dulceras-azucareras-rosas.jpg",
    tag: "Vajilla",
    name: "Dulceras, azucareras y lecheras",
    description: "Piezas de porcelana con rosas pintadas.",
    price: "$12.000 c/u",
    category: "Vajilla y mesa del té",
  },
  {
    id: "plato-torta-rosas",
    image: "/images/productos/plato-torta-rosas.jpg",
    tag: "Vajilla",
    name: "Plato Torta Rosas",
    description: "Plato de porcelana con ilustraciones de rosas.",
    price: "$50.000",
    category: "Vajilla y mesa del té",
  },
  {
    id: "jarros-te-x3",
    image: "/images/productos/jarros-vidrio-pajaros-te-1.jpg",
    images: [
      "/images/productos/jarros-vidrio-pajaros-te-1.jpg",
      "/images/productos/jarros-vidrio-pajaros-te-2.jpg",
      "/images/productos/jarros-vidrio-pajaros-te-3.jpg",
      "/images/productos/jarros-vidrio-flores.jpg",
    ],
    tag: "Vidrio",
    name: "Jarros vidrio té x3 Pajaritos",
    description:
      "Set de 3 jarros de vidrio para té con pajaritos. Varios diseños disponibles.",
    price: "$30.000",
    category: "Jarros de vidrio",
  },
  {
    id: "jarros-cafe-x4",
    image: "/images/productos/jarros-vidrio-pajaros-1.jpg",
    images: [
      "/images/productos/jarros-vidrio-pajaros-1.jpg",
      "/images/productos/jarros-vidrio-pajaros-2.jpg",
      "/images/productos/jarros-vidrio-pajaros-3.jpg",
    ],
    tag: "Vidrio",
    name: "Jarritos vidrio café x4 Pajaritos",
    description:
      "Set de 4 jarritos de vidrio para café con pajaritos. Varios diseños disponibles.",
    price: "$35.000",
    category: "Jarros de vidrio",
  },
  {
    id: "fuente-olivas",
    image: "/images/productos/fuente-olivas.jpg",
    tag: "Vajilla",
    name: "Fuente ovalada Olivas",
    description: "Fuente ovalada 11 x 6 con motivo de olivas.",
    price: "$15.000",
    category: "Vajilla y mesa del té",
  },
  {
    id: "bol-copetin",
    image: "/images/productos/bols-medianos-olivas.jpg",
    tag: "Vajilla",
    name: "Bols para copetín chicos",
    description: "11 cm de diámetro.",
    price: "$4.000 c/u",
    category: "Vajilla y mesa del té",
  },
  {
    id: "bol-mediano",
    image: "/images/productos/bols-medianos-olivas-2.jpg",
    images: [
      "/images/productos/bols-medianos-olivas-2.jpg",
      "/images/productos/bols-medianos-olivas.jpg",
    ],
    tag: "Vajilla",
    name: "Bols medianos",
    description: "Bowls de cerámica con diseño de olivas.",
    price: "$5.000 c/u",
    category: "Vajilla y mesa del té",
  },
  {
    id: "set-cocina-chicos",
    image: "/images/productos/set-cocina-masitas.jpg",
    images: [
      "/images/productos/set-cocina-masitas.jpg",
      "/images/productos/set-cocina-masitas-chupetin.jpg",
      "/images/productos/set-cocina-muffins.jpg",
      "/images/productos/set-cocina-noquis.jpg",
    ],
    tag: "Infantil",
    name: "Sets de cocina para chicos",
    description:
      "A cocinar masitas · A cocinar masitas chupetín · A cocinar muffins · A cocinar ñoquis.",
    price: "$35.000",
    category: "Sets de cocina para chicos",
  },
];

export const pasteleriaCategories = [
  "Tortas",
  "Vasitos",
  "Cajas dulces",
  "Delicias en bolsitas",
] as const;

export const decoCategories = [
  "Jarritos de cerámica",
  "Medallones",
  "Jarros de vidrio",
  "Vajilla y mesa del té",
  "Sets de cocina para chicos",
] as const;
