import { Layout } from "@/components/layout/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 md:py-24 bg-white">
        
        <div className="mb-12 md:mb-24">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">SHIPPING POLICY</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">Global Logistics</h2>
            <div className="space-y-4 text-[0.875rem] font-normal tracking-wide text-black leading-relaxed pl-4 border-l border-black">
              <p>We deliver worldwide. Every piece is treated as a museum artifact.</p>
              <p>Standard delivery times range from 14 to 28 days depending on the destination and required customs clearances.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">Packaging</h2>
            <div className="space-y-4 text-[0.875rem] font-normal tracking-wide text-black leading-relaxed pl-4 border-l border-black">
              <p>Custom wooden crates are built for all stone and bronze sculptures.</p>
              <p>Climate-controlled packaging is used for delicate textiles and terracotta.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">Insurance</h2>
            <div className="space-y-4 text-[0.875rem] font-normal tracking-wide text-black leading-relaxed pl-4 border-l border-black">
              <p>Every shipment is fully insured door-to-door for its exact acquisition value.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">Customs & Duties</h2>
            <div className="space-y-4 text-[0.875rem] font-normal tracking-wide text-black leading-relaxed pl-4 border-l border-black">
              <p>International clients are responsible for import duties and local taxes.</p>
              <p>We provide all necessary documentation for smooth customs clearance.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
