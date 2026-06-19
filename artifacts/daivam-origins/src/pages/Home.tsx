import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { products, featuredProducts, categories, articles } from "@/data";

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

const heroItems = [
  { href: "/products", image: "https://images.unsplash.com/photo-1578321272125-4dc13b6c7b5c?w=1200&q=80", label: "The Collection" },
  { href: "/categories/Stone Carvings", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", label: "Stone Carvings" },
  { href: "/categories/Terracotta Art", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80", label: "Terracotta" },
  { href: "/categories/Bronze Sculptures", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80", label: "Bronze" },
];

export default function Home() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="px-5 md:px-10 pt-8 pb-12">
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>

          {/* Large feature tile */}
          <Link
            href={heroItems[0].href}
            className="col-span-2 relative block overflow-hidden group"
            style={{ height: "clamp(300px, 52vw, 600px)" }}
          >
            <img
              src={heroItems[0].image}
              alt={heroItems[0].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5 md:top-7 md:left-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/50 font-medium">001 — Daivam Origins</p>
            </div>
            <div className="absolute bottom-0 left-0 p-5 md:p-9">
              <h2 className="leading-none tracking-tight text-white" style={{ lineHeight: 0.88 }}>
                <span className="block text-white" style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.5rem)", fontWeight: 200, letterSpacing: "-0.02em" }}>Ancient</span>
                <span className="block text-white" style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.03em" }}>Crafts</span>
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-6 bg-white/40" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">World Destinations</p>
              </div>
            </div>
          </Link>

          {/* Smaller tiles */}
          {heroItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="col-span-1 relative block overflow-hidden group"
              style={{ height: "clamp(160px, 28vw, 320px)" }}
            >
              <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <h3 className="text-white font-bold leading-tight" style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.15rem)", fontWeight: 700 }}>
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
          <Link href="/products" className="text-xs uppercase tracking-widest text-black underline underline-offset-4">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {featuredProducts.map((product, i) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className={`relative block overflow-hidden group ${i === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              style={{ height: i === 0 ? "clamp(210px, 55vw, 460px)" : "clamp(190px, 50vw, 320px)" }}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <p className="text-[10px] uppercase tracking-widest text-white/65 mb-1">{product.category}</p>
                <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2">{product.name}</h3>
                <p className="text-sm font-semibold text-white mt-1">${product.price.toLocaleString()}</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative block overflow-hidden group"
              style={{ height: "clamp(190px, 50vw, 380px)" }}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
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
          <Link href="/editorial" className="text-xs uppercase tracking-widest text-black underline underline-offset-4">All Articles</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {articles.slice(0, 3).map((article, i) => (
            <a
              key={article.id}
              href={article.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden group ${i === 0 ? "md:col-span-2" : "col-span-1"}`}
              style={{ height: i === 0 ? "clamp(240px, 38vw, 440px)" : "clamp(200px, 28vw, 320px)" }}
            >
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <p className="text-[10px] uppercase tracking-widest text-white/65 mb-1">
                  {article.readTime} min read{article.category ? ` · ${article.category}` : ""}
                </p>
                <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-3">{article.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/70 mt-2 font-medium">Read on Medium →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

    </Layout>
  );
}
