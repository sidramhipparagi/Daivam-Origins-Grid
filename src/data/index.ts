export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  images: string[];
  origin: string;
  material: string;
  description: string;
  featured: boolean;
  era: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
};

export type Article = {
  id: number;
  title: string;
  subtitle: string;
  mediumUrl: string;
  imageUrl: string;
  publishedAt: string;
  readTime: number;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Nataraja Bronze Sculpture",
    category: "Bronze Sculptures",
    price: 4800,
    imageUrl: "https://images.unsplash.com/photo-1578321272125-4dc13b6c7b5c?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1578321272125-4dc13b6c7b5c?w=800&q=80"],
    origin: "Tamil Nadu, India",
    material: "Lost-Wax Bronze",
    description: "A masterwork of the Chola tradition — Shiva as the cosmic dancer, cast in pure bronze using the ancient lost-wax process practiced for over 1,000 years.",
    featured: true,
    era: "Chola Period Style, 9th–13th century",
    dimensions: "42 cm H × 32 cm W",
    weight: "4.2 kg",
    inStock: true,
  },
  {
    id: 2,
    name: "Ganesha Panchaloha Idol",
    category: "Bronze Sculptures",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80"],
    origin: "Swamimalai, Tamil Nadu",
    material: "Panchaloha (Five Metals)",
    description: "Seated Ganesha cast in the sacred five-metal alloy — gold, silver, copper, lead, and iron — in a proportion passed down through generations of Sthapati craftsmen.",
    featured: true,
    era: "Traditional Agamic Style",
    dimensions: "28 cm H × 20 cm W",
    weight: "2.8 kg",
    inStock: true,
  },
  {
    id: 3,
    name: "Mahabalipuram Bull Panel",
    category: "Stone Carvings",
    price: 7500,
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"],
    origin: "Mahabalipuram, Tamil Nadu",
    material: "Black Granite",
    description: "Hand-carved relief panel depicting Nandi, the sacred bull, in the tradition of the UNESCO-listed Pallava shore temples. Each groove cut by hammer and chisel.",
    featured: true,
    era: "Pallava Style, 7th–9th century",
    dimensions: "60 cm W × 45 cm H × 8 cm D",
    weight: "18 kg",
    inStock: true,
  },
  {
    id: 4,
    name: "Indus Valley Terracotta Vessel",
    category: "Terracotta Art",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"],
    origin: "Rajasthan, India",
    material: "Red Terracotta Clay",
    description: "Wheel-thrown and hand-finished in the tradition of ancient Harappan potters. Geometric incised patterns reflect a 5,000-year-old visual language.",
    featured: true,
    era: "Harappan Tradition",
    dimensions: "35 cm H × 22 cm dia",
    weight: "1.6 kg",
    inStock: true,
  },
  {
    id: 5,
    name: "Bastar Tribal Dhokra Horse",
    category: "Bronze Sculptures",
    price: 2100,
    imageUrl: "https://images.unsplash.com/photo-1566648006497-f96a4960d7e0?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1566648006497-f96a4960d7e0?w=800&q=80"],
    origin: "Bastar, Chhattisgarh",
    material: "Dhokra Brass (Lost-Wax)",
    description: "Cast by the Ghadia Lohar tribe of Bastar using the 4,000-year-old solid cast lost-wax process. Each figure is entirely unique — no two are identical.",
    featured: true,
    era: "Contemporary Tribal",
    dimensions: "24 cm H × 30 cm L",
    weight: "1.4 kg",
    inStock: true,
  },
  {
    id: 6,
    name: "Kalamkari Narrative Panel",
    category: "Textile Art",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"],
    origin: "Srikalahasti, Andhra Pradesh",
    material: "Handloom Cotton, Natural Dyes",
    description: "Hand-drawn with a bamboo pen dipped in fermented iron solution. Each line is an irreversible commitment. Depicts a scene from the Mahabharata using only plant-derived pigments.",
    featured: true,
    era: "Srikalahasti Tradition",
    dimensions: "120 cm × 80 cm",
    weight: "0.3 kg",
    inStock: true,
  },
  {
    id: 7,
    name: "Bidriware Hookah Base",
    category: "Metalwork",
    price: 3600,
    imageUrl: "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=800&q=80"],
    origin: "Bidar, Karnataka",
    material: "Zinc-Copper Alloy, Silver Inlay",
    description: "Cast from a zinc-copper alloy blackened with ammonium chloride and soil from Bidar's ancient fort. Pure silver wire hammered into carved floral channels by hand.",
    featured: false,
    era: "Bahmani Sultanate Tradition, 14th century",
    dimensions: "28 cm H × 18 cm dia",
    weight: "0.9 kg",
    inStock: true,
  },
  {
    id: 8,
    name: "Channapatna Lacquer Toy Elephant",
    category: "Wooden Artifacts",
    price: 480,
    imageUrl: "https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&q=80"],
    origin: "Channapatna, Karnataka",
    material: "Ivory Wood, Natural Lacquer",
    description: "Turned on a traditional foot-operated lathe from the lightweight ivory wood tree. Lacquered with natural plant-derived pigment, applied while spinning.",
    featured: false,
    era: "Hyder Ali Period Tradition",
    dimensions: "15 cm H × 20 cm L",
    weight: "0.2 kg",
    inStock: true,
  },
  {
    id: 9,
    name: "Warli Ceremonial Wall Panel",
    category: "Terracotta Art",
    price: 680,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80"],
    origin: "Palghar, Maharashtra",
    material: "Terracotta with White Pigment",
    description: "Warli tribal motifs — circles, triangles, squares representing sun, mountains, and earth — pressed into clay and painted with rice paste in pure white on terracotta.",
    featured: false,
    era: "Warli Tribal Tradition",
    dimensions: "45 cm × 35 cm",
    weight: "1.2 kg",
    inStock: true,
  },
  {
    id: 10,
    name: "Pashmina Shawl — Kani Weave",
    category: "Textile Art",
    price: 5200,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"],
    origin: "Kanihama, Kashmir",
    material: "Shahtoosh-Grade Pashmina",
    description: "Woven on a traditional karkhana loom using the Kani technique — each colored thread individually interlocked by hand, pattern guided by a twill master's coded script.",
    featured: false,
    era: "Mughal Court Tradition",
    dimensions: "200 cm × 75 cm",
    weight: "0.18 kg",
    inStock: true,
  },
  {
    id: 11,
    name: "Sandstone Durga Relief",
    category: "Stone Carvings",
    price: 9800,
    imageUrl: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=800&q=80"],
    origin: "Jaipur, Rajasthan",
    material: "Pink Rajasthan Sandstone",
    description: "Mahishasuramardini — the goddess slaying the buffalo demon. Hand-carved in warm pink sandstone by master shilpis in Jaipur's 500-year-old stone-carving quarter.",
    featured: false,
    era: "Rajput Period Style",
    dimensions: "75 cm H × 55 cm W × 12 cm D",
    weight: "32 kg",
    inStock: true,
  },
  {
    id: 12,
    name: "Dokra Vishnu Figurine",
    category: "Bronze Sculptures",
    price: 1680,
    imageUrl: "https://images.unsplash.com/photo-1575897462399-1b62e64b7c47?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1575897462399-1b62e64b7c47?w=800&q=80"],
    origin: "West Bengal",
    material: "Dhokra Bronze",
    description: "Standing Vishnu, four-armed with conch and discus, cast in solid bronze by the Mal Paharia tribe of West Bengal. Purposely imperfect — each casting flaw is preserved.",
    featured: false,
    era: "Bengal Tribal Tradition",
    dimensions: "22 cm H",
    weight: "0.8 kg",
    inStock: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [...new Set(products.map((p) => p.category))];

export const articles: Article[] = [
  {
    id: 1,
    title: "The Lost Language of Bronze: India's Forgotten Casting Traditions",
    subtitle: "How Chola-era craftsmen encoded spirituality into metal",
    mediumUrl: "https://medium.com/@daivamorigins/lost-language-of-bronze",
    imageUrl: "https://images.unsplash.com/photo-1578321272125-4dc13b6c7b5c?w=800&q=80",
    publishedAt: "2024-03-15",
    readTime: 7,
    category: "Heritage",
  },
  {
    id: 2,
    title: "Stone That Speaks: Mahabalipuram and the Grammar of Sculpture",
    subtitle: "Reading the visual poetry carved into ancient Tamil stone",
    mediumUrl: "https://medium.com/@daivamorigins/stone-that-speaks",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    publishedAt: "2024-02-10",
    readTime: 9,
    category: "Craft",
  },
  {
    id: 3,
    title: "Terracotta's Return: Why Ancient Clay is Reclaiming Modern Homes",
    subtitle: "From Indus Valley to contemporary interior design",
    mediumUrl: "https://medium.com/@daivamorigins/terracotta-return",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    publishedAt: "2024-01-22",
    readTime: 6,
    category: "Design",
  },
  {
    id: 4,
    title: "The Weight of Gold: Brass Idols and Devotional Aesthetics",
    subtitle: "Why the craftsmen of Swamimalai still pour metal by hand",
    mediumUrl: "https://medium.com/@daivamorigins/weight-of-gold",
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    publishedAt: "2023-12-05",
    readTime: 8,
    category: "Craft",
  },
];
