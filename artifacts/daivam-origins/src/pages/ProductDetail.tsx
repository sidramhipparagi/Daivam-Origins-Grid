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
        <div className="min-h-screen bg-border animate-pulse p-[1px]" />
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-background p-16 text-center font-bold tracking-widest uppercase">
          Artifact not found.
        </div>
      </Layout>
    );
  }

  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean);

  return (
    <Layout>
      <div className="w-full flex-1 bg-border flex flex-col gap-[1px]">
        
        {/* TOP: GIANT PRODUCT NAME */}
        <div className="bg-card p-4 md:p-16 flex flex-col justify-center min-h-[30vh]">
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] break-words hyphens-auto">
            {product.name}
          </h1>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px]">
          
          {/* LEFT: Metadata & Enquire */}
          <div className="md:col-span-1 bg-background flex flex-col gap-[1px]">
            <div className="p-8 md:p-12 bg-card border-b border-border">
              <p className="text-primary font-black tracking-tighter text-4xl md:text-5xl uppercase mb-2">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground font-bold tracking-widest uppercase text-sm">
                {product.inStock ? "AVAILABLE FOR ACQUISITION" : "RESERVED"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-[1px] bg-border">
              {product.origin && (
                <div className="bg-background p-6">
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1">ORIGIN</p>
                  <p className="font-bold uppercase tracking-wider">{product.origin}</p>
                </div>
              )}
              {product.material && (
                <div className="bg-background p-6">
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1">MATERIAL</p>
                  <p className="font-bold uppercase tracking-wider">{product.material}</p>
                </div>
              )}
              {product.era && (
                <div className="bg-background p-6">
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1">ERA</p>
                  <p className="font-bold uppercase tracking-wider">{product.era}</p>
                </div>
              )}
              {product.dimensions && (
                <div className="bg-background p-6">
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1">DIMENSIONS</p>
                  <p className="font-bold uppercase tracking-wider">{product.dimensions}</p>
                </div>
              )}
            </div>

            <ContactModal>
              <button className="w-full bg-primary text-primary-foreground font-black text-2xl tracking-widest uppercase py-8 md:py-12 hover:bg-primary/90 transition-colors mt-auto">
                ENQUIRE
              </button>
            </ContactModal>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border">
            {allImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative bg-background overflow-hidden ${
                  idx === 0 && allImages.length % 2 !== 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} - view ${idx + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </Layout>
  );
}
