import { Layout } from "@/components/layout/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Shipping Policy</h1>
        </div>

        <div className="space-y-10">
          {[
            {
              heading: "Global Logistics",
              body: "We deliver worldwide. Every piece is treated as a museum artifact in transit. Standard delivery ranges from 14 to 28 days depending on destination and customs clearance requirements.",
            },
            {
              heading: "Packaging",
              body: "Custom wooden crates are built for all stone and bronze sculptures. Climate-controlled packaging is used for delicate textiles and terracotta pieces. All packaging is designed to protect your acquisition for decades.",
            },
            {
              heading: "Insurance",
              body: "Every shipment is fully insured door-to-door for its exact acquisition value. In the rare event of damage in transit, we handle the claim process entirely on your behalf.",
            },
            {
              heading: "Customs & Duties",
              body: "International clients are responsible for applicable import duties and local taxes at the destination. We provide complete documentation — certificates of origin, material declarations, and valuation letters — to ensure smooth customs clearance.",
            },
            {
              heading: "Tracking",
              body: "A tracking number and dedicated logistics contact are provided for every shipment. You will receive updates at each major transit point.",
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-3">{section.heading}</h2>
              <p className="text-sm text-black/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
