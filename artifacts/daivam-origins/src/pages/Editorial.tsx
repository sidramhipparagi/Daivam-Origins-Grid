import { Layout } from "@/components/layout/Layout";
import { useListArticles } from "@workspace/api-client-react";

export default function Editorial() {
  const { data: articles, isLoading } = useListArticles();

  return (
    <Layout>
      <div className="w-full flex-1 bg-white px-6 md:px-12 py-12 md:py-24">
        
        <div className="mb-12">
          <h1 className="text-[0.75rem] font-bold tracking-widest uppercase text-black">EDITORIAL</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-gray-100 border border-black animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles?.map((article, i) => {
              const fallbackImages = ['/images/ed-1.png', '/images/ed-2.png', '/images/ed-3.png', '/images/hero-stone.png'];
              const imgUrl = article.imageUrl || fallbackImages[i % fallbackImages.length];

              return (
                <a 
                  key={article.id} 
                  href={article.mediumUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group block border border-black flex flex-col ${
                    i === 0 ? 'md:col-span-2 h-[500px] md:h-[600px]' : 'col-span-1 h-[400px] md:h-auto'
                  }`}
                >
                  <div className="flex-1 relative p-2 h-[70%]">
                    <img 
                      src={imgUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  
                  <div className="border-t border-black p-4 bg-white flex flex-col justify-between">
                    <div className="flex items-center gap-4 mb-3 text-[0.7rem] font-bold tracking-widest uppercase text-black">
                      <span>{article.category || 'CRAFT'}</span>
                      <span>•</span>
                      <span>{article.readTime} MIN READ</span>
                    </div>
                    
                    <h2 className="text-[0.85rem] text-black font-semibold uppercase leading-tight mb-2">
                      {article.title}
                    </h2>
                    
                    {article.subtitle && (
                      <p className="text-[0.75rem] font-medium tracking-wider text-black uppercase mb-4 line-clamp-2">
                        {article.subtitle}
                      </p>
                    )}
                    
                    <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-widest uppercase text-black group-hover:underline underline-offset-4">
                      READ ON MEDIUM <span>→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
