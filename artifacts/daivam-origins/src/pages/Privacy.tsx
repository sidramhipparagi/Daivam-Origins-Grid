import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto w-full px-5 md:px-10 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Privacy Policy</h1>
        </div>

        <div className="space-y-10">
          {[
            {
              heading: "Data Collection",
              body: "We collect only the information necessary to process your acquisition and deliver a bespoke experience. This includes your name, contact details, and shipping destination. We do not retain payment data on our servers.",
            },
            {
              heading: "Use of Data",
              body: "Your data is used strictly for order fulfillment, customs documentation, and communication regarding your collection pieces. We never sell or share your information with third parties except logistics partners required for delivery.",
            },
            {
              heading: "Security",
              body: "All communications are encrypted via HTTPS. Our systems are regularly reviewed to ensure your privacy and security are maintained at the highest standard.",
            },
            {
              heading: "Your Rights",
              body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us directly. We will respond within 14 business days.",
            },
            {
              heading: "Cookies",
              body: "We use minimal cookies necessary for the website to function. We do not use third-party advertising or tracking cookies.",
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
