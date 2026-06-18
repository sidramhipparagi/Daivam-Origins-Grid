import { Layout } from "@/components/layout/Layout";
import { useListProducts } from "@workspace/api-client-react";
import { Link } from "wouter";

export default function Products() {
  const { data: products, isLoading } = useListProducts();

  return (
    <Layout>
      <div className="px-5 md:px-10 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-black font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">The Collection</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 animate-pulse" style={{ height: "clamp(200px,30vw,360px)" }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {products?.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={`relative block overflow-hidden group ${
                  i === 0 ? "col-span-2 md:col-span-2" : "col-span-1"
                }`}
                style={{
                  height: i === 0
                    ? "clamp(240px, 42vw, 480px)"
                    : "clamp(200px, 28vw, 340px)",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-white/65 mb-0.5">{product.category}</p>
                  <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2">{product.name}</h3>
                  <p className="text-sm font-semibold text-white mt-1">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
