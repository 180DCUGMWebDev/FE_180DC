export const HALFZIP_SIZES = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"] as const;

export interface Product {
  id: number;
  name: string;
  price: number;
  type: "merch" | "digital" | "bundle";
  image: string;
  images?: string[];
  description?: string;
  details?: string[];
  sizes?: string[];
  sizeChartImage?: string;
  bundleContents?: string[];
}

// ────────────────────────────────────────────
// MERCHANDISE
// ────────────────────────────────────────────
export const merchandiseProducts: Product[] = [
  {
    id: 1,
    name: "Half Zip",
    price: 180000,
    type: "merch",
    image: "/img/store/products/half-zip/slide-1.png",
    images: [
      "/img/store/products/half-zip/slide-1.png",
      "/img/store/products/half-zip/slide-2.jpeg",
      "/img/store/products/half-zip/slide-3.jpeg",
      "/img/store/sizecharthalfzip.jpg",
    ],
    description:
      "Premium half zip jacket dari 180DC UGM. Nyaman dipakai sehari-hari dengan bahan berkualitas tinggi.",
    details: ["Bahan premium", "Desain eksklusif 180DC UGM"],
    sizes: [...HALFZIP_SIZES],
    sizeChartImage: "/img/store/sizecharthalfzip.jpg",
  },
  {
    id: 2,
    name: "Cap",
    price: 55000,
    type: "merch",
    image: "/img/store/products/baseball-cap/slide-1.png",
    images: [
      "/img/store/products/baseball-cap/slide-1.png",
      "/img/store/products/baseball-cap/slide-2.jpeg",
      "/img/store/products/baseball-cap/slide-3.jpeg",
    ],
    description: "Baseball cap eksklusif 180DC UGM. Cocok untuk gaya kasual sehari-hari.",
    details: ["Adjustable strap", "Desain eksklusif 180DC UGM"],
  },
  {
    id: 3,
    name: "Acrylic Pin",
    price: 10000,
    type: "merch",
    image: "/img/store/products/acrylic-pin/slide-1.png",
    images: [
      "/img/store/products/acrylic-pin/slide-1.png",
      "/img/store/products/acrylic-pin/slide-2.jpeg",
    ],
    description: "Pin akrilik 180DC UGM. Cocok untuk aksesoris tas, jaket, atau topi.",
    details: ["Material akrilik premium", "Pin lock backing"],
  },
  {
    id: 4,
    name: "Sticker",
    price: 4000,
    type: "merch",
    image: "/img/store/products/sticker/slide-1.png",
    images: ["/img/store/products/sticker/slide-1.png", "/img/store/products/sticker/slide-2.jpeg"],
    description: "Sticker 180DC UGM. Tempel di laptop, botol minum, atau di mana saja!",
    details: ["Waterproof vinyl", "Desain eksklusif"],
  },
];

// ────────────────────────────────────────────
// SPECIAL PRODUCTS
// ────────────────────────────────────────────
export const specialProducts: Product[] = [
  {
    id: 5,
    name: "Casebook",
    price: 59000,
    type: "digital",
    image: "/img/store/casebook/HeroImageBook-c.png",
    images: ["/img/store/casebook/HeroImageBook-c.png"],
    description:
      "Casebook 180DC UGM — kumpulan studi kasus consulting untuk mengasah problem-solving dan persiapan case interview.",
    details: ["Real-world consulting cases", "Structured frameworks", "Digital PDF format"],
  },
  {
    id: 6,
    name: "Framework Bank",
    price: 99000,
    type: "digital",
    image: "/img/store/fbank/FbankHero.png",
    images: [
      "/img/store/fbank/FbankHero.png",
      "/img/store/fbank/PREVIEW_A.png",
      "/img/store/fbank/PREVIEW_A2.png",
    ],
    description:
      "Framework Bank 180DC UGM — koleksi framework consulting terkurasi untuk memperkuat strategy toolkit-mu.",
    details: ["Curated consulting frameworks", "Visual & structured format", "Digital PDF format"],
  },
];

// ────────────────────────────────────────────
// PAKET BUNDLE
// ────────────────────────────────────────────
export const bundleProducts: Product[] = [
  {
    id: 7,
    name: "Sticker Bundle (isi 5)",
    price: 15000,
    type: "bundle",
    image: "/img/store/products/sticker/slide-1.png",
    images: ["/img/store/products/sticker/slide-1.png", "/img/store/products/sticker/slide-2.jpeg"],
    description: "Paket hemat 5 sticker 180DC UGM. Lebih hemat daripada beli satuan!",
    details: ["5 sticker dalam 1 paket", "Hemat Rp5.000 dari harga satuan"],
    bundleContents: ["5x Sticker"],
  },
  {
    id: 8,
    name: "Start-up Kit",
    price: 79000,
    type: "bundle",
    image: "/img/store/products/bundles/start-up-kit.png",
    images: [
      "/img/store/products/bundles/start-up-kit.png",
      "/img/store/products/baseball-cap/slide-1.png",
      "/img/store/products/acrylic-pin/slide-1.png",
      "/img/store/products/sticker/slide-1.png",
    ],
    description:
      "Paket starter untuk kamu yang baru bergabung! Lengkap dengan cap, pin, dan sticker bundle.",
    details: ["1x Cap", "2x Acrylic Pin", "1x Sticker Bundle (isi 5)", "Hemat dari harga satuan"],
    bundleContents: ["1x Cap", "2x Acrylic Pin", "1x Sticker Bundle (isi 5)"],
  },
  {
    id: 9,
    name: "Execution Pack",
    price: 225000,
    type: "bundle",
    image: "/img/store/products/bundles/execution-pack.png",
    images: [
      "/img/store/products/bundles/execution-pack.png",
      "/img/store/products/half-zip/slide-1.png",
      "/img/store/products/baseball-cap/slide-1.png",
      "/img/store/products/sticker/slide-1.png",
      "/img/store/products/acrylic-pin/slide-1.png",
    ],
    description: "Paket lengkap merchandise 180DC UGM — half zip, sticker, cap, dan pin!",
    details: [
      "1x Half Zip (pilih size)",
      "1x Sticker",
      "1x Cap",
      "1x Acrylic Pin",
      "Hemat dari harga satuan",
    ],
    sizes: [...HALFZIP_SIZES],
    bundleContents: ["1x Half Zip", "1x Sticker", "1x Cap", "1x Acrylic Pin"],
  },
  {
    id: 10,
    name: "Elevation Pack",
    price: 161000,
    type: "bundle",
    image: "/img/store/products/bundles/elevation-pack.png",
    images: [
      "/img/store/products/bundles/elevation-pack.png",
      "/img/store/fbank/FbankHero.png",
      "/img/store/casebook/HeroImageBook-c.png",
      "/img/store/products/sticker/slide-1.png",
    ],
    description:
      "Paket lengkap untuk meningkatkan skill consulting — framework bank, casebook, dan sticker bundle!",
    details: [
      "1x Framework Bank",
      "1x Casebook",
      "1x Sticker Bundle (isi 5)",
      "Hemat Rp12.000 dari harga satuan",
    ],
    bundleContents: ["1x Framework Bank", "1x Casebook", "1x Sticker Bundle (isi 5)"],
  },
];

// ────────────────────────────────────────────
// ALL PRODUCTS
// ────────────────────────────────────────────
export const allProducts: Product[] = [
  ...merchandiseProducts,
  ...specialProducts,
  ...bundleProducts,
];

/**
 * Helper: cari product by ID
 */
export const getProductById = (id: number): Product | undefined =>
  allProducts.find((p) => p.id === id);

/**
 * Helper: cek apakah product butuh pilih size
 */
export const productNeedsSize = (product: Product): boolean =>
  !!(product.sizes && product.sizes.length > 0);
