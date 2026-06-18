import { Layout } from "@/components/layout/Layout";
import { useListArticles } from "@workspace/api-client-react";
import { format } from "date-fns";

export default function Editorial() {
  const { data: articles, isLoading } = useListArticles();

  return (
    <Layout>
      <div className="w-full flex-1">
        
        <div className="bg-card border-b border-border p-8 md:p-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-center">EDITORIAL</h1>
          <p className="text-center mt-6 text-muted-foreground tracking-widest uppercase font-bold text-sm max-w-xl mx-auto">
            STORIES OF STONES, BRONZE, AND THE ARTISANS WHO BREATHE LIFE INTO THEM.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border p-[1px]">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border p-[1px]">
            {articles?.map((article, i) => {
              // Cycle through the available editorial images if API doesn't have good ones
              const fallbackImages = ['/images/ed-1.png', '/images/ed-2.png', '/images/ed-3.png', '/images/hero-stone.png'];
              const imgUrl = article.imageUrl || fallbackImages[i % fallbackImages.length];

              return (
                <a 
                  key={article.id} 
                  href={article.mediumUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative aspect-square md:aspect-[4/3] overflow-hidden bg-background block border border-border hover:border-primary transition-colors"
                >
                  <img 
                    src={imgUrl} 
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <div className="flex items-center gap-4 mb-4 text-xs font-bold tracking-widest uppercase text-primary">
                      <span>{article.category || 'CRAFT'}</span>
                      <span>•</span>
                      <span>{article.readTime} MIN READ</span>
                      <span>•</span>
                      <span>{format(new Date(article.publishedAt), 'MMM yyyy')}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6">
                      {article.title}
                    </h2>
                    
                    {article.subtitle && (
                      <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-8 line-clamp-2">
                        {article.subtitle}
                      </p>
                    )}
                    
                    <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                      READ ON MEDIUM <span className="text-lg">→</span>
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
