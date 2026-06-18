import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full p-4 md:p-8">
        
        <div className="bg-card border border-border p-8 md:p-16 mb-1">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">TERMS &<br/>CONDITIONS</h1>
        </div>

        <div className="bg-background p-8 md:p-12 border border-border space-y-12">
          
          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">AUTHENTICITY</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              EVERY ARTIFACT AND PIECE OF CRAFTSMANSHIP IS GUARANTEED AUTHENTIC. WE SOURCE DIRECTLY FROM MASTER ARTISANS OR VERIFIED HERITAGE COLLECTIONS ACROSS INDIA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">SALES & RETURNS</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              DUE TO THE NATURE OF ANTIQUITIES AND HIGH-VALUE CRAFTS, ALL SALES ARE FINAL. RETURNS ARE ONLY ACCEPTED IN CASES OF PROVEN DAMAGE DURING TRANSIT BEFORE DELIVERY.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">COPYRIGHT</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              ALL IMAGERY, TEXT, AND BRANDING ON THIS PLATFORM REMAIN THE EXCLUSIVE PROPERTY OF DAIVAM ORIGINS. REPRODUCTION WITHOUT EXPLICIT PERMISSION IS PROHIBITED.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
