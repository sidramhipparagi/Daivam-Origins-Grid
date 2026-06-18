import { Layout } from "@/components/layout/Layout";
import { useListArticles } from "@workspace/api-client-react";

export default function Editorial() {
  const { data: articles, isLoading } = useListArticles();

  return (
    <Layout>
      <div className="px-5 md:px-10 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Editorial</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 animate-pulse" style={{ height: "320px" }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {articles?.map((article, i) => {
              const fallbackImages = ["/images/ed-1.png", "/images/ed-2.png", "/images/ed-3.png", "/images/hero-stone.png"];
              const imgUrl = article.imageUrl || fallbackImages[i % fallbackImages.length];

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
                      ? "clamp(280px, 40vw, 520px)"
                      : "clamp(240px, 28vw, 380px)",
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-7">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">
                        {article.category || "Craft"}
                      </span>
                      <span className="text-white/30 text-[10px]">·</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">
                        {article.readTime} min read
                      </span>
                    </div>
                    <h2 className="text-base md:text-lg font-bold text-white leading-snug line-clamp-3 mb-3">
                      {article.title}
                    </h2>
                    {article.subtitle && (
                      <p className="text-xs text-white/65 leading-relaxed line-clamp-2 mb-3">
                        {article.subtitle}
                      </p>
                    )}
                    <p className="text-[10px] uppercase tracking-widest text-white/70 font-medium">
                      Read on Medium →
                    </p>
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
