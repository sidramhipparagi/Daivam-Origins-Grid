import { Layout } from "@/components/layout/Layout";
import { useListProducts } from "@workspace/api-client-react";
import { Link, useParams } from "wouter";

export default function CategoryProducts() {
  const params = useParams();
  const categoryName = params.name ? decodeURIComponent(params.name) : "";
  const { data: products, isLoading } = useListProducts({ category: categoryName });

  return (
    <Layout>
      <div className="w-full flex-1 bg-white flex flex-col px-6 md:px-12 py-12 md:py-24">
        
        <div className="mb-12">
          <p className="text-[0.75rem] font-bold tracking-widest uppercase text-black mb-2">CATEGORY</p>
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">{categoryName}</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-gray-100 border border-black animate-pulse" />
            ))}
          </div>
        ) : products?.length === 0 ? (
          <div className="bg-white py-16">
            <p className="text-black uppercase font-bold tracking-widest text-[0.875rem]">No pieces currently available in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
            {products?.map((product, i) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`} 
                className={`group block border border-black flex flex-col ${
                  i % 5 === 0 ? 'col-span-2 row-span-2' : 
                  i % 7 === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'
                }`}
              >
                <div className="flex-1 relative p-2">
                  <img 
                    src={product.imageUrl || '/images/hero-stone.png'} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" 
                  />
                </div>
                <div className="border-t border-black p-3 bg-white flex flex-col justify-between min-h-[4.5rem]">
                  <h3 className="text-[0.8rem] text-black font-semibold uppercase leading-tight line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[0.75rem] text-black font-medium tracking-wider">
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
