import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 md:py-24 bg-white">
        
        <div className="mb-12 md:mb-24">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">TERMS & CONDITIONS</h1>
        </div>

        <div className="space-y-16">
          
          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">AUTHENTICITY</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              EVERY ARTIFACT AND PIECE OF CRAFTSMANSHIP IS GUARANTEED AUTHENTIC. WE SOURCE DIRECTLY FROM MASTER ARTISANS OR VERIFIED HERITAGE COLLECTIONS ACROSS INDIA.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">SALES & RETURNS</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              DUE TO THE NATURE OF ANTIQUITIES AND HIGH-VALUE CRAFTS, ALL SALES ARE FINAL. RETURNS ARE ONLY ACCEPTED IN CASES OF PROVEN DAMAGE DURING TRANSIT BEFORE DELIVERY.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">COPYRIGHT</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              ALL IMAGERY, TEXT, AND BRANDING ON THIS PLATFORM REMAIN THE EXCLUSIVE PROPERTY OF DAIVAM ORIGINS. REPRODUCTION WITHOUT EXPLICIT PERMISSION IS PROHIBITED.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
