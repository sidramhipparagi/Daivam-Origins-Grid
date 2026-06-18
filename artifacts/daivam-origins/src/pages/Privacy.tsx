import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full p-4 md:p-8">
        
        <div className="bg-card border border-border p-8 md:p-16 mb-1">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">PRIVACY<br/>POLICY</h1>
        </div>

        <div className="bg-background p-8 md:p-12 border border-border space-y-12">
          
          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">DATA COLLECTION</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              WE ONLY COLLECT INFORMATION NECESSARY TO PROCESS YOUR ACQUISITIONS AND DELIVER A BESPOKE EXPERIENCE. THIS INCLUDES YOUR NAME, CONTACT DETAILS, AND SHIPPING DESTINATION. WE DO NOT RETAIN PAYMENT DATA ON OUR SERVERS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">USAGE OF DATA</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              YOUR DATA IS UTILIZED STRICTLY FOR ORDER FULFILLMENT, CUSTOMS DOCUMENTATION, AND COMMUNICATION REGARDING YOUR COLLECTION PIECES. WE NEVER SELL OR SHARE YOUR PRIVATE INFORMATION WITH THIRD PARTIES EXCEPT LOGISTICS PARTNERS REQUIRED FOR DELIVERY.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-widest uppercase mb-4 text-primary">SECURITY</h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground leading-relaxed max-w-3xl">
              ALL TRANSACTIONS ARE ENCRYPTED AND HANDLED VIA SECURE CHANNELS. OUR SYSTEMS ARE REGULARLY AUDITED TO ENSURE YOUR DISCRETION AND SECURITY.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
