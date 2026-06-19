import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className="px-5 md:px-10 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Get in Touch</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image half */}
          <div className="relative overflow-hidden" style={{ height: "clamp(260px, 45vw, 520px)" }}>
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80"
              alt="Ancient stone carving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">Enquiries & Acquisitions</p>
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                Reach Across<br />Centuries
              </h2>
            </div>
          </div>

          {/* Form half */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-6">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
