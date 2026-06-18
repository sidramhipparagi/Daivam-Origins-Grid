import { Layout } from "@/components/layout/Layout";
import { useListProducts } from "@workspace/api-client-react";
import { Link } from "wouter";

export default function Products() {
  const { data: products, isLoading } = useListProducts();

  return (
    <Layout>
      <div className="w-full flex-1 bg-border flex flex-col gap-[1px]">
        
        <div className="bg-card p-8 md:p-16 border-b border-border">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">THE COLLECTION</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] p-[1px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="aspect-[3/4] bg-card animate-pulse" />
            ))}
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
                  <div className="flex justify-between items-center">
                    <p className="text-primary font-bold tracking-widest uppercase text-sm">
                      ${product.price.toLocaleString()}
                    </p>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase hidden md:block">
                      {product.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
      </div>
    </Layout>
  );
}
