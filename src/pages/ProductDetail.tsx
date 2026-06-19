import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useParams } from "wouter";
import { ContactModal } from "@/components/ContactModal";
import { products } from "@/data";
import { X, ZoomIn } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-white p-16 text-center font-bold tracking-widest uppercase text-black">
          Artifact not found.
        </div>
      </Layout>
    );
  }

  const allImages = [product.imageUrl, ...(product.images || [])]
    .filter(Boolean)
    .map(getAssetUrl);

  return (
    <Layout>
      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxSrc(null)}
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            className="max-w-[92vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="px-5 md:px-10 py-10">

        {/* Heading — above images, never overlaid */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-widest text-black/40 font-medium mb-2">{product.category}</p>
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight">{product.name}</h1>
        </div>

        {/* Hero image — clean, clickable */}
        <div
          className="relative w-full mb-3 overflow-hidden cursor-zoom-in group"
          style={{ height: "clamp(280px, 50vw, 580px)" }}
          onClick={() => setLightboxSrc(allImages[0])}
        >
          <img
            src={allImages[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={16} strokeWidth={1.5} className="text-black" />
          </div>
        </div>

        {/* Secondary images — clean, clickable */}
        {allImages.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {allImages.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden cursor-zoom-in group"
                style={{ height: "clamp(140px, 22vw, 260px)" }}
                onClick={() => setLightboxSrc(img)}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 2}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={13} strokeWidth={1.5} className="text-black" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Details */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-8"
          style={{ borderTop: "1px solid #e8e8e8" }}
        >
          {/* Left — provenance */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-widest text-black/40 mb-4">About This Piece</h2>
            {product.description && (
              <p className="text-sm text-black leading-relaxed mb-8">{product.description}</p>
            )}
            <div className="grid grid-cols-2 gap-5">
              {product.origin && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Origin</p>
                  <p className="text-sm font-semibold text-black">{product.origin}</p>
                </div>
              )}
              {product.material && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Material</p>
                  <p className="text-sm font-semibold text-black">{product.material}</p>
                </div>
              )}
              {product.era && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Era</p>
                  <p className="text-sm font-semibold text-black">{product.era}</p>
                </div>
              )}
              {product.dimensions && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Dimensions</p>
                  <p className="text-sm font-semibold text-black">{product.dimensions}</p>
                </div>
              )}
              {product.weight && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Weight</p>
                  <p className="text-sm font-semibold text-black">{product.weight}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right — acquisition */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-black/40 mb-2">Status</p>
              <p className="text-sm font-bold uppercase tracking-widest text-black">
                {product.inStock ? "Available for Acquisition" : "Reserved"}
              </p>
            </div>
            <ContactModal>
              <button className="w-full bg-black text-white font-bold text-xs tracking-widest uppercase py-4 mt-10 hover:bg-black/85 transition-colors">
                Enquire About This Piece
              </button>
            </ContactModal>
          </div>
        </div>

      </div>
    </Layout>
  );
}
