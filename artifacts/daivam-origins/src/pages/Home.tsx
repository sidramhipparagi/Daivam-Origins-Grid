import { Layout } from "@/components/layout/Layout";
import { useListProducts, useListFeaturedProducts, useListArticles, useListCategories, useHealthCheck } from "@workspace/api-client-react";
import { Link } from "wouter";

const TESTIMONIALS = [
  {
    quote: "The Nataraja I received was beyond anything I could have imagined. Every detail is alive. It now sits at the entrance of our home in London and stops every guest.",
    name: "Amelia Thornton",
    location: "London, UK",
  },
  {
    quote: "I have collected Indian antiquities for twenty years. Daivam Origins sources pieces of genuine provenance and ships them with the care they deserve. Truly exceptional.",
    name: "Stefan Müller",
    location: "Munich, Germany",
  },
  {
    quote: "The terracotta vessel arrived with complete documentation of its regional origin. It is more beautiful in person than in any photograph. An heirloom.",
    name: "Leila Ahmadi",
    location: "Dubai, UAE",
  },
];

export default function Home() {
  useHealthCheck();

  const { data: featuredProducts } = useListFeaturedProducts();
  const { data: allProducts } = useListProducts();
  const { data: categories } = useListCategories();
  const { data: articles } = useListArticles();

  const heroItems = [
    { href: "/products", image: "/images/hero-main.png", label: "The Collection" },
    { href: "/categories/Stone Carvings", image: "/images/hero-stone.png", label: "Stone Carvings" },
    { href: "/categories/Terracotta Art", image: "/images/hero-terracotta.png", label: "Terracotta" },
    { href: "/categories/Bronze Sculptures", image: "/images/hero-gold.png", label: "Bronze" },
  ];

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="px-5 md:px-10 pt-8 pb-12">
        {/* Tagline */}
        <p className="text-xs uppercase tracking-widest text-black mb-5 font-medium">
          Ancient Crafts · World Destinations
        </p>

        {/*
          Mobile:  2-col grid, row 1 = first tile full width, rows 2+ = 1+1
          Desktop: 3-col grid, first tile spans 2 cols (tall), rest 1 col
        */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {/* Large feature tile */}
          <Link
            href={heroItems[0].href}
            className="col-span-2 md:col-span-2 relative block overflow-hidden group"
            style={{ height: "clamp(240px, 45vw, 520px)" }}
          >
            <img
              src={heroItems[0].image}
              alt={heroItems[0].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 md:p-8">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1 font-medium">Explore</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {heroItems[0].label}
              </h2>
            </div>
          </Link>

          {/* Smaller tiles */}
          {heroItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="col-span-1 relative block overflow-hidden group"
              style={{ height: "clamp(180px, 30vw, 340px)" }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-white leading-tight">
                  {item.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="px-5 md:px-10 pb-12">
        <div className="flex items-baseline justify-between mb-5">
          <p className="text-xs uppercase tracking-widest text-black font-medium">Featured Pieces</p>
          <Link href="/products" className="text-xs uppercase tracking-widest text-black underline underline-offset-4">
            View All
          </Link>
        </div>

        {/* 2-col mobile · 4-col desktop — uniform tiles, text overlaid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {featuredProducts?.map((product, i) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className={`relative block overflow-hidden group ${
                i === 0 ? "col-span-2 md:col-span-2" : "col-span-1"
              }`}
              style={{
                height: i === 0
                  ? "clamp(220px, 40vw, 460px)"
                  : "clamp(180px, 28vw, 320px)",
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <p className="text-[10px] uppercase tracking-widest text-white/65 mb-1">{product.category}</p>
                <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-white mt-1">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ALL PRODUCTS ─────────────────────────────────────── */}
      <section className="px-5 md:px-10 pb-12">
        <div className="flex items-baseline justify-between mb-5">
          <p className="text-xs uppercase tracking-widest text-black font-medium">The Collection</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {allProducts?.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative block overflow-hidden group"
              style={{ height: "clamp(200px, 32vw, 380px)" }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[10px] uppercase tracking-widest text-white/65 mb-0.5">{product.category}</p>
                <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">{product.name}</h3>
                <p className="text-sm font-semibold text-white mt-0.5">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CUSTOMER EXPERIENCE ──────────────────────────────── */}
      <section className="px-5 md:px-10 pb-12">
        <p className="text-xs uppercase tracking-widest text-black font-medium mb-8">Customer Experience</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#f7f5f2] p-7 flex flex-col justify-between min-h-[220px]">
              <p className="text-3xl font-black text-black leading-none mb-4 select-none">"</p>
              <p className="text-sm text-black leading-relaxed font-normal flex-1">{t.quote}</p>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid #e0ddd9" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-black">{t.name}</p>
                <p className="text-xs text-black/50 uppercase tracking-widest mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDITORIAL ────────────────────────────────────────── */}
      <section className="px-5 md:px-10 pb-14">
        <div className="flex items-baseline justify-between mb-5">
          <p className="text-xs uppercase tracking-widest text-black font-medium">Editorial</p>
          <Link href="/editorial" className="text-xs uppercase tracking-widest text-black underline underline-offset-4">
            All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {articles?.slice(0, 3).map((article, i) => {
            const fallbacks = ["/images/ed-1.png", "/images/ed-2.png", "/images/ed-3.png"];
            const img = article.imageUrl || fallbacks[i % fallbacks.length];
            return (
              <a
                key={article.id}
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden group ${
                  i === 0 ? "md:col-span-2" : "col-span-1"
                }`}
                style={{
                  height: i === 0
                    ? "clamp(240px, 38vw, 440px)"
                    : "clamp(200px, 28vw, 320px)",
                }}
              >
                <img
                  src={img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="text-[10px] uppercase tracking-widest text-white/65 mb-1">
                    {article.readTime} min read
                    {article.category ? ` · ${article.category}` : ""}
                  </p>
                  <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 mt-2 font-medium">
                    Read on Medium →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

    </Layout>
  );
}
