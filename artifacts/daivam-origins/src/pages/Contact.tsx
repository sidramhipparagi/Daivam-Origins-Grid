import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className="flex-1 bg-white px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Visual Half */}
        <div className="relative border border-black p-2 min-h-[40vh] md:min-h-full">
          <img 
            src="/images/hero-stone.png" 
            alt="Ancient stone carving" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h1 className="text-2xl md:text-[2rem] font-black tracking-tighter uppercase mb-4 text-white bg-black w-max px-4 py-2">
              REACH<br/>ACROSS<br/>TIME
            </h1>
          </div>
        </div>

        {/* Form Half */}
        <div className="flex flex-col justify-center">
          <div className="w-full">
            <h2 className="text-[0.75rem] text-black uppercase tracking-widest font-bold mb-8">INQUIRIES & ACQUISITIONS</h2>
            <ContactForm />
          </div>
        </div>

      </div>
    </Layout>
  );
}
