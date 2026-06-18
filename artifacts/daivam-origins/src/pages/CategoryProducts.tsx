import { Layout } from "@/components/layout/Layout";
import { useListProducts } from "@workspace/api-client-react";
import { Link, useParams } from "wouter";

export default function CategoryProducts() {
  const params = useParams();
  const categoryName = params.name ? decodeURIComponent(params.name) : "";
  const { data: products, isLoading } = useListProducts({ category: categoryName });

  return (
    <Layout>
      <div className="w-full flex-1 bg-border flex flex-col gap-[1px]">
        
        <div className="bg-card p-8 md:p-16 border-b border-border">
          <p className="text-primary font-bold tracking-widest uppercase mb-4">CATEGORY</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">{categoryName}</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] p-[1px]">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-card animate-pulse" />
            ))}
          </div>
        ) : products?.length === 0 ? (
          <div className="bg-background p-16 text-center">
            <p className="text-muted-foreground uppercase font-bold tracking-widest">No pieces currently available in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] p-[1px]">
            {products?.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`} 
                className="relative aspect-[3/4] group overflow-hidden bg-background block"
              >
                <img 
                  src={product.imageUrl || '/images/hero-stone.png'} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg md:text-xl font-black tracking-tighter uppercase leading-tight mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold tracking-widest uppercase text-sm">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
        
      </div>
    </Layout>
  );
}
