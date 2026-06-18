import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 md:py-24 bg-white">
        
        <div className="mb-12 md:mb-24">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">PRIVACY POLICY</h1>
        </div>

        <div className="space-y-16">
          
          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">DATA COLLECTION</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              WE ONLY COLLECT INFORMATION NECESSARY TO PROCESS YOUR ACQUISITIONS AND DELIVER A BESPOKE EXPERIENCE. THIS INCLUDES YOUR NAME, CONTACT DETAILS, AND SHIPPING DESTINATION. WE DO NOT RETAIN PAYMENT DATA ON OUR SERVERS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">USAGE OF DATA</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              YOUR DATA IS UTILIZED STRICTLY FOR ORDER FULFILLMENT, CUSTOMS DOCUMENTATION, AND COMMUNICATION REGARDING YOUR COLLECTION PIECES. WE NEVER SELL OR SHARE YOUR PRIVATE INFORMATION WITH THIRD PARTIES EXCEPT LOGISTICS PARTNERS REQUIRED FOR DELIVERY.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[1rem] font-bold tracking-widest uppercase text-black">SECURITY</h2>
            <p className="text-[0.875rem] font-normal tracking-wide text-black leading-relaxed max-w-3xl pl-4 border-l border-black">
              ALL TRANSACTIONS ARE ENCRYPTED AND HANDLED VIA SECURE CHANNELS. OUR SYSTEMS ARE REGULARLY AUDITED TO ENSURE YOUR DISCRETION AND SECURITY.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
