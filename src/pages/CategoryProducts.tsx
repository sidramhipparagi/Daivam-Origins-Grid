import { Layout } from "@/components/layout/Layout";
import { Link, useParams } from "wouter";
import { products } from "@/data";
import { getAssetUrl } from "@/lib/utils";

export default function CategoryProducts() {
  const params = useParams();
  const categoryName = params.name ? decodeURIComponent(params.name) : "";
  const filtered = products.filter((p) => p.category === categoryName);

  return (
    <Layout>
      <div className="px-5 md:px-10 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Collection</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">{categoryName}</h1>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20">
            <p className="text-sm text-black/50 uppercase tracking-widest">No pieces currently available in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {filtered.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={`relative block overflow-hidden group ${i === 0 ? "md:col-span-2" : "col-span-1"}`}
                style={{ height: i === 0 ? "clamp(240px, 42vw, 480px)" : "clamp(200px, 28vw, 340px)" }}
              >
                <img src={getAssetUrl(product.imageUrl)} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-0.5">{product.origin}</p>
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
