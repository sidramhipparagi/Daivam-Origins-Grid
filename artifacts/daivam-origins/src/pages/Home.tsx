import { Layout } from "@/components/layout/Layout";
import { useListProducts, useListFeaturedProducts, useListArticles, useListCategories, useHealthCheck } from "@workspace/api-client-react";
import { Link } from "wouter";

export default function Home() {
  // Satisfy hook usage
  useHealthCheck();
  
  const { data: featuredProducts } = useListFeaturedProducts();
  const { data: allProducts } = useListProducts();
  const { data: categories } = useListCategories();
  const { data: articles } = useListArticles();

  return (
    <Layout>
      {/* 2. Hero - Full-viewport mosaic */}
      <section className="min-h-[100dvh] grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-[1px] bg-border p-[1px] mt-[-64px]">
        {/* Large Tile */}
        <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 relative bg-background group overflow-hidden">
          <img src="/images/hero-main.png" alt="Ancient Crafts" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6 md:p-12">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
              ANCIENT CRAFTS<br/>
              <span className="text-primary">MODERN WORLD</span>
            </h1>
            <Link href="/products" className="inline-block bg-primary text-primary-foreground font-black tracking-widest uppercase px-8 py-4 text-center hover:bg-primary/90 transition-colors w-max">
              EXPLORE
            </Link>
          </div>
        </div>

        {/* Small Tiles */}
        <div className="relative bg-background group overflow-hidden">
          <img src="/images/hero-stone.png" alt="Stone" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
        </div>
        <div className="relative bg-background group overflow-hidden">
          <img src="/images/hero-terracotta.png" alt="Terracotta" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
        </div>
        <div className="relative bg-background group overflow-hidden">
          <img src="/images/hero-gold.png" alt="Gold" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
        </div>
        <div className="relative bg-background group overflow-hidden">
          <img src="/images/cat-brass.png" alt="Brass" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="bg-border p-[1px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
          {categories?.slice(0, 6).map((cat, i) => {
            const catImages = [
              '/images/cat-bronze.png',
              '/images/cat-stone.png',
              '/images/cat-terracotta.png',
              '/images/cat-silk.png',
              '/images/cat-wood.png',
              '/images/cat-brass.png'
            ];
            const img = catImages[i % catImages.length];
            
            return (
              <Link key={cat} href={`/categories/${cat}`} className="relative aspect-[4/3] md:aspect-square group overflow-hidden bg-background block">
                <img src={img} alt={cat} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 group-hover:bg-transparent transition-colors">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-center border-4 border-foreground px-6 py-3 bg-background/40 backdrop-blur-sm">
                    {cat}
                  </h2>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="bg-border p-[1px]">
        <div className="bg-card p-8 md:p-16 border-b border-border">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">FEATURED ACQUISITIONS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]">
          {featuredProducts?.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="relative aspect-[3/4] group overflow-hidden bg-background block">
              <img src={product.imageUrl || '/images/hero-stone.png'} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg md:text-xl font-black tracking-tighter uppercase leading-tight mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-primary font-bold tracking-widest uppercase text-sm">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. All Products */}
      <section className="bg-border p-[1px]">
        <div className="bg-card p-8 md:p-16 border-b border-border flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">THE COLLECTION</h2>
          <Link href="/products" className="hidden md:inline-block text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[1px]">
          {allProducts?.slice(0, 10).map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="relative aspect-square group overflow-hidden bg-background block">
              <img src={product.imageUrl || '/images/cat-terracotta.png'} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-sm md:text-base font-bold tracking-tighter uppercase leading-tight line-clamp-1">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden bg-card p-6 border-t border-border flex justify-center">
          <Link href="/products" className="text-sm font-bold tracking-widest uppercase text-primary">
            VIEW FULL COLLECTION →
          </Link>
        </div>
      </section>

      {/* 6. Editorial Section */}
      <section className="bg-border p-[1px]">
        <div className="bg-card p-8 md:p-16 border-b border-border">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">EDITORIAL</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
          {articles?.slice(0, 2).map((article, i) => {
            const fallbackImages = ['/images/ed-1.png', '/images/ed-2.png'];
            const imgUrl = article.imageUrl || fallbackImages[i % fallbackImages.length];

            return (
              <a key={article.id} href={article.mediumUrl} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] group overflow-hidden bg-background block border border-transparent hover:border-primary transition-colors">
                <img src={imgUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-6 md:p-12">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">{article.readTime} MIN READ</p>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6">{article.title}</h3>
                  <div className="inline-block text-sm font-bold tracking-widest uppercase">
                    READ ON MEDIUM <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

    </Layout>
  );
}
