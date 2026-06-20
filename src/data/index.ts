export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  
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
    slug: "nataraja",
    name: "Nataraja Panchaloha Sculpture",
    category: "Panchaloham Sculptures",
  
    imageUrl: "/images/product-hero.webp",
    images: ["/images/i1.webp", "/images/i3.webp", "/images/i6.webp", "/images/i4.webp",],
    origin: "Tamil Nadu, India",
    material: "Panchaloha - Five metal alloy",
    description: "A masterwork of the Chola tradition — Shiva as the cosmic dancer, cast in pure bronze using the ancient lost-wax process practiced for over 1,000 years.",
    featured: true,
    era: "Chola Period Style, 9th–13th century",
    dimensions: "42 cm H × 32 cm W",
    weight: "9.2 kg",
    inStock: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [...new Set(products.map((p) => p.category))];

export const articles: Article[] = [
  {
    id: 1,
    title: "Why we named it Daivam Origins",
    subtitle: "Daivam Origins came into being...",
    mediumUrl: "https://medium.com/@daivamorigins/why-we-named-it-daivam-origins-af99fb42fbd1",
    imageUrl: "/images/art1.webp",
    publishedAt: "2026-04-13",
    readTime: 3,
    category: "Nomenclature",
  },
  {
    id: 2,
    title: "Introducing Daivam Origins",
    subtitle: "Every culture carries a soul. A rhythm...",
    mediumUrl: "https://medium.com/@daivamorigins/introducing-daivam-origins-abba02c1113f",
    imageUrl: "/images/art2.webp",
    publishedAt: "2026-04-16",
    readTime: 3,
    category: "Introduction",
  },
  {
    id: 3,
    title: "Nataraja: The Cosmic Dance of Shiva",
    subtitle: "Nataraja, the “Lord of the Dance,” is one of the most iconic...",
    mediumUrl: "https://medium.com/@daivamorigins/nataraja-the-cosmic-dance-of-shiva-8f162f5b8c66",
    imageUrl: "/images/art3.webp",
    publishedAt: "2026-04-19",
    readTime: 4,
    category: "Craft",
  },
  {
    id: 4,
    title: "Master Craftsmen Behind Daivam Origins",
    subtitle: "To understand the foundation of Daivam Origins, it is essential...",
    mediumUrl: "https://medium.com/@daivamorigins/master-craftsmen-behind-daivam-origins-278f46a12e01",
    imageUrl: "/images/art4.webp",
    publishedAt: "2026-04-18",
    readTime: 3,
    category: "Craftsmen",
  },
  {
    id: 5,
    title: "Sustainability — a lived tradition",
    subtitle: "In a world that often moves too fast, where products are...",
    mediumUrl: "https://medium.com/@daivamorigins/sustainability-a-lived-tradition-0c14911560d2",
    imageUrl: "/images/art5.webp",
    publishedAt: "2026-05-06",
    readTime: 3,
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Panchaloha: The Sacred Alloy",
    subtitle: "The term Panchaloha is derived from two Sanskrit words:...",
    mediumUrl: "https://medium.com/@daivamorigins/panchaloha-the-sacred-alloy-9cf949618b4e",
    imageUrl: "/images/art6.webp",
    publishedAt: "2026-04-26",
    readTime: 3,
    category: "Craft",
  },
  {
    id: 7,
    title: "Sacred Nooks: Quiet in the Chaos",
    subtitle: "In the relentless hum of the modern world, our homes...",
    mediumUrl: "https://medium.com/@daivamorigins/sacred-nooks-quiet-in-the-chaos-e8550863f4ef",
    imageUrl: "/images/art7.webp",
    publishedAt: "2026-06-12",
    readTime: 4,
    category: "Sacred Spaces",
  },
];
