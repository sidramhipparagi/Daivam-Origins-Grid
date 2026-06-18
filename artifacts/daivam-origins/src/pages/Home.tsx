import { Layout } from "@/components/layout/Layout";
import { useListProducts, useListFeaturedProducts, useListArticles, useListCategories, useHealthCheck } from "@workspace/api-client-react";
import { Link } from "wouter";

export default function Home() {
  useHealthCheck();
  
  const { data: featuredProducts } = useListFeaturedProducts();
  const { data: allProducts } = useListProducts();
  const { data: categories } = useListCategories();
  const { data: articles } = useListArticles();

  return (
    <Layout>
      {/* 2. Hero - Asymmetric editorial mosaic */}
      <section className="bg-white p-6 md:p-12 pb-16 md:pb-32">
        <div className="mb-8">
          <p className="text-[0.7rem] uppercase text-black tracking-widest font-semibold">
            DAIVAM ORIGINS — ANCIENT CRAFTS, WORLD DESTINATIONS
          </p>
        </div>
        
        {/* CSS Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          
          {/* Tile 1 - Large */}
          <Link href="/products" className="col-span-2 row-span-2 relative group block">
            <img src="/images/hero-main.png" alt="Ancient Crafts" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 bg-black py-2 px-4 flex items-center">
              <span className="text-white text-[0.7rem] uppercase tracking-widest font-semibold">ALL ARTIFACTS</span>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-colors pointer-events-none" />
          </Link>
          
          {/* Tile 2 - Tall */}
          <Link href="/categories/stone" className="col-span-1 row-span-2 relative group block">
            <img src="/images/hero-stone.png" alt="Stone" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 bg-black py-2 px-4 flex items-center">
              <span className="text-white text-[0.7rem] uppercase tracking-widest font-semibold">STONE</span>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-colors pointer-events-none" />
          </Link>

          {/* Tile 3 - Short */}
          <Link href="/categories/terracotta" className="col-span-1 row-span-1 relative group block">
            <img src="/images/hero-terracotta.png" alt="Terracotta" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 bg-black py-2 px-4 flex items-center">
              <span className="text-white text-[0.7rem] uppercase tracking-widest font-semibold">TERRACOTTA</span>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-colors pointer-events-none" />
          </Link>

          {/* Tile 4 - Short */}
          <Link href="/categories/bronze" className="col-span-1 row-span-1 relative group block">
            <img src="/images/hero-gold.png" alt="Bronze" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 bg-black py-2 px-4 flex items-center">
              <span className="text-white text-[0.7rem] uppercase tracking-widest font-semibold">BRONZE</span>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-colors pointer-events-none" />
          </Link>
          
        </div>
      </section>

      {/* 3. Category Section */}
      <section className="bg-white px-6 md:px-12 pb-16 md:pb-32">
        <h2 className="text-[0.75rem] text-black uppercase tracking-widest font-bold mb-6">EXPLORE MATERIALS</h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pb-4 md:pb-0 scrollbar-hide">
          {categories?.slice(0, 6).map((cat) => (
            <Link key={cat} href={`/categories/${cat}`} className="flex-none w-[200px] md:w-auto md:flex-1 h-32 md:h-48 border border-black bg-black flex items-center justify-center group hover:bg-white transition-colors">
              <h3 className="text-white group-hover:text-black text-[0.75rem] uppercase tracking-widest font-bold">
                {cat}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="bg-white px-6 md:px-12 pb-16 md:pb-32">
        <h2 className="text-[0.75rem] text-black uppercase tracking-widest font-bold mb-6">FEATURED PIECES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[350px]">
          {featuredProducts?.map((product, i) => (
            <Link key={product.id} href={`/products/${product.id}`} className={`group block border border-black flex flex-col ${i === 0 ? 'col-span-2 row-span-2' : i === 3 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}>
              <div className="flex-1 relative p-2">
                <img src={product.imageUrl || '/images/hero-stone.png'} alt={product.name} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="border-t border-black p-3 bg-white flex flex-col justify-between min-h-[4rem]">
                <h3 className="text-[0.8rem] text-black font-semibold uppercase leading-tight line-clamp-1">{product.name}</h3>
                <p className="text-[0.75rem] text-black font-medium tracking-wider mt-1">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Editorial Section */}
      <section className="bg-white px-6 md:px-12 pb-16 md:pb-32">
        <h2 className="text-[0.75rem] text-black uppercase tracking-widest font-bold mb-6">EDITORIAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {articles?.slice(0, 3).map((article, i) => {
            const fallbackImages = ['/images/ed-1.png', '/images/ed-2.png', '/images/ed-3.png'];
            const imgUrl = article.imageUrl || fallbackImages[i % fallbackImages.length];

            return (
              <a key={article.id} href={article.mediumUrl} target="_blank" rel="noopener noreferrer" className={`group block border border-black flex flex-col ${i === 0 ? 'md:col-span-2 h-[400px] md:h-[600px]' : 'col-span-1 h-[400px] md:h-auto'}`}>
                <div className="flex-1 relative p-2 h-[70%]">
                  <img src={imgUrl} alt={article.title} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="border-t border-black p-4 bg-white flex flex-col justify-between">
                  <p className="text-[0.7rem] text-black font-bold uppercase tracking-widest mb-2">{article.readTime} MIN READ</p>
                  <h3 className="text-[0.85rem] text-black font-semibold uppercase leading-tight">{article.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </section>

    </Layout>
  );
}
