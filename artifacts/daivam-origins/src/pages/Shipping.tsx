import { Layout } from "@/components/layout/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full p-4 md:p-8 grid gap-1">
        
        <div className="bg-card border border-border p-8 md:p-16 mb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">SHIPPING<br/>POLICY</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-border">
          <div className="bg-background p-8 border border-border">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-primary">Global Logistics</h2>
            <div className="space-y-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed">
              <p>We deliver worldwide. Every piece is treated as a museum artifact.</p>
              <p>Standard delivery times range from 14 to 28 days depending on the destination and required customs clearances.</p>
            </div>
          </div>
          
          <div className="bg-background p-8 border border-border">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-primary">Packaging</h2>
            <div className="space-y-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed">
              <p>Custom wooden crates are built for all stone and bronze sculptures.</p>
              <p>Climate-controlled packaging is used for delicate textiles and terracotta.</p>
            </div>
          </div>

          <div className="bg-background p-8 border border-border">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-primary">Insurance</h2>
            <div className="space-y-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed">
              <p>Every shipment is fully insured door-to-door for its exact acquisition value.</p>
            </div>
          </div>

          <div className="bg-background p-8 border border-border">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 text-primary">Customs & Duties</h2>
            <div className="space-y-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed">
              <p>International clients are responsible for import duties and local taxes.</p>
              <p>We provide all necessary documentation for smooth customs clearance.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
