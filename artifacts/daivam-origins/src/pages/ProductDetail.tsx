import { Layout } from "@/components/layout/Layout";
import { useGetProduct } from "@workspace/api-client-react";
import { useParams } from "wouter";
import { ContactModal } from "@/components/ContactModal";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data: product, isLoading } = useGetProduct(id, { 
    query: { enabled: !!id } 
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-white animate-pulse" />
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-white p-16 text-center font-bold tracking-widest uppercase text-black">
          Artifact not found.
        </div>
      </Layout>
    );
  }

  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean);

  return (
    <Layout>
      <div className="w-full flex-1 bg-white px-6 md:px-12 py-12 md:py-24">
        
        {/* TOP: PRODUCT NAME */}
        <div className="mb-12 md:mb-24">
          <h1 className="text-2xl md:text-[2rem] text-black font-extrabold tracking-tight uppercase leading-tight break-words hyphens-auto max-w-4xl">
            {product.name}
          </h1>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* LEFT: Metadata & Enquire */}
          <div className="md:col-span-1 flex flex-col gap-8">
            <div>
              <p className="text-black font-bold tracking-tight text-[1.2rem] uppercase mb-2">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-black font-bold tracking-widest uppercase text-[0.7rem]">
                {product.inStock ? "AVAILABLE FOR ACQUISITION" : "RESERVED"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.origin && (
                <div className="border border-black px-2 py-1">
                  <p className="text-[0.7rem] text-black font-bold tracking-widest uppercase">{product.origin}</p>
                </div>
              )}
              {product.material && (
                <div className="border border-black px-2 py-1">
                  <p className="text-[0.7rem] text-black font-bold tracking-widest uppercase">{product.material}</p>
                </div>
              )}
              {product.era && (
                <div className="border border-black px-2 py-1">
                  <p className="text-[0.7rem] text-black font-bold tracking-widest uppercase">{product.era}</p>
                </div>
              )}
            </div>

            {product.dimensions && (
              <div className="pt-4 border-t border-black">
                <p className="text-[0.7rem] text-black font-bold tracking-widest uppercase mb-1">DIMENSIONS</p>
                <p className="text-[0.875rem] text-black uppercase">{product.dimensions}</p>
              </div>
            )}

            <ContactModal>
              <button className="w-full bg-black text-white font-bold text-[0.8rem] tracking-widest uppercase py-4 hover:bg-black/90 transition-colors mt-8">
                ENQUIRE
              </button>
            </ContactModal>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {allImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative border border-black p-2 ${
                  idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} - view ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </Layout>
  );
}
