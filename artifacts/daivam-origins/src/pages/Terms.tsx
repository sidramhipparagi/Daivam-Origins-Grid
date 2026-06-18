import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Terms & Conditions</h1>
        </div>

        <div className="space-y-10">
          {[
            {
              heading: "Authenticity",
              body: "Every artifact and piece of craftsmanship is guaranteed authentic. We source directly from master artisans and verified heritage collections across India. A certificate of authenticity accompanies each acquisition.",
            },
            {
              heading: "Sales & Returns",
              body: "Due to the nature of antiquities and high-value crafts, all sales are final. Returns are accepted only in cases of proven damage during transit documented before delivery. We will arrange a full replacement or refund in such cases.",
            },
            {
              heading: "Copyright",
              body: "All imagery, text, and branding on this platform remain the exclusive property of Daivam Origins. Reproduction without explicit written permission is prohibited.",
            },
            {
              heading: "Pricing",
              body: "All prices are listed in US Dollars and are subject to change without notice. The price confirmed at the time of enquiry is the binding price for that transaction.",
            },
            {
              heading: "Governing Law",
              body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tamil Nadu, India.",
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
