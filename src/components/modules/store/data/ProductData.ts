export interface Product {
  id: number;
  name: string;
  price: number;
  slugLink: string;
  image: string;
}

// ────────────────────────────────────────────
// BUNDLING PACK
// ────────────────────────────────────────────
export const bundlingProducts: Product[] = [
  {
    id: 101,
    name: "Casebook Vol. 3 — Strategy",
    price: 125000,
    slugLink: "/store/casebook-vol-3-strategy",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: 102,
    name: "Starter Bundle — New Member Kit",
    price: 210000,
    slugLink: "/store/starter-bundle",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80",
  },
  {
    id: 103,
    name: "Casebook Vol. 2 — Finance",
    price: 100000,
    slugLink: "/store/casebook-vol-2-finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    id: 104,
    name: "Complete Consulting Pack",
    price: 350000,
    slugLink: "/store/complete-consulting-pack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    id: 105,
    name: "Casebook Vol. 1 — Operations",
    price: 85000,
    slugLink: "/store/casebook-vol-1-operations",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
];

// ────────────────────────────────────────────
// MERCHANDISE
// ────────────────────────────────────────────
export const merchandiseProducts: Product[] = [
  {
    id: 201,
    name: "180DC Hoodie — Midnight Black",
    price: 285000,
    slugLink: "/store/hoodie-midnight-black",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
  },
  {
    id: 202,
    name: "Classic Tote Bag",
    price: 75000,
    slugLink: "/store/tote-bag",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80",
  },
  {
    id: 203,
    name: "180DC T-Shirt — Olive Green",
    price: 155000,
    slugLink: "/store/tshirt-olive-green",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: 204,
    name: "Sticker Pack — Premium Set",
    price: 35000,
    slugLink: "/store/sticker-pack",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&q=80",
  },
  {
    id: 205,
    name: "Tumbler — Stainless 500ml",
    price: 120000,
    slugLink: "/store/tumbler-stainless",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    id: 206,
    name: "Snapback Cap — Navy",
    price: 145000,
    slugLink: "/store/snapback-cap-navy",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
  },
];

// ────────────────────────────────────────────
// SPECIAL PRODUCTS
// ────────────────────────────────────────────
export const specialProducts: Product[] = [
  {
    id: 301,
    name: "180DC Annual Report 2024",
    price: 65000,
    slugLink: "/store/annual-report-2024",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    id: 302,
    name: "Management Consulting Handbook",
    price: 195000,
    slugLink: "/store/consulting-handbook",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    id: 303,
    name: "Limited Edition Poster Set",
    price: 55000,
    slugLink: "/store/poster-set",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    id: 304,
    name: "Digital Toolkit — Excel Templates",
    price: 45000,
    slugLink: "/store/digital-toolkit",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];
