import { Layout } from "@/components/layout/Layout";
import { useGetProduct } from "@workspace/api-client-react";
import { useParams } from "wouter";
import { ContactModal } from "@/components/ContactModal";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data: product, isLoading } = useGetProduct(id, {
    query: { enabled: !!id },
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
      <div className="px-5 md:px-10 py-10">

        {/* ── HERO IMAGE ──────────────────────────────────── */}
        <div className="relative w-full mb-3 overflow-hidden" style={{ height: "clamp(280px, 50vw, 580px)" }}>
          <img
            src={allImages[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-xl">
              {product.name}
            </h1>
            <p className="text-lg md:text-2xl font-bold text-white mt-3">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* ── SECONDARY IMAGES ────────────────────────────── */}
        {allImages.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {allImages.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden"
                style={{ height: "clamp(140px, 22vw, 260px)" }}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* ── DETAILS ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-8" style={{ borderTop: "1px solid #e5e5e5" }}>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-4">About This Piece</h2>
            {product.description && (
              <p className="text-sm text-black leading-relaxed mb-6">{product.description}</p>
            )}
            <div className="grid grid-cols-2 gap-4">
              {product.origin && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Origin</p>
                  <p className="text-sm font-semibold text-black">{product.origin}</p>
                </div>
              )}
              {product.material && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Material</p>
                  <p className="text-sm font-semibold text-black">{product.material}</p>
                </div>
              )}
              {product.era && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Era</p>
                  <p className="text-sm font-semibold text-black">{product.era}</p>
                </div>
              )}
              {product.dimensions && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Dimensions</p>
                  <p className="text-sm font-semibold text-black">{product.dimensions}</p>
                </div>
              )}
              {product.weight && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Weight</p>
                  <p className="text-sm font-semibold text-black">{product.weight}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">Price</p>
              <p className="text-2xl font-bold text-black mb-1">${product.price.toLocaleString()}</p>
              <p className="text-xs uppercase tracking-widest text-black/50">
                {product.inStock ? "Available for Acquisition" : "Reserved"}
              </p>
            </div>
            <ContactModal>
              <button className="w-full bg-black text-white font-bold text-xs tracking-widest uppercase py-4 mt-8 hover:bg-black/85 transition-colors">
                Enquire About This Piece
              </button>
            </ContactModal>
          </div>
        </div>

      </div>
    </Layout>
  );
}
