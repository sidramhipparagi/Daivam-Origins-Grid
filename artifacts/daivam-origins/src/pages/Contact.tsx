import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className="flex-1 bg-border grid grid-cols-1 md:grid-cols-2 gap-[1px]">
        
        {/* Visual Half */}
        <div className="bg-background relative min-h-[40vh] md:min-h-full">
          <img 
            src="/images/hero-stone.png" 
            alt="Ancient stone carving" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
              REACH<br/>ACROSS<br/>TIME
            </h1>
            <p className="text-muted-foreground uppercase font-bold tracking-widest max-w-sm">
              Inquiries for museum acquisitions, private collections, and gallery displays.
            </p>
          </div>
        </div>

        {/* Form Half */}
        <div className="bg-background p-4 md:p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <ContactForm />
          </div>
        </div>

      </div>
    </Layout>
  );
}
