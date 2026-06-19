import { Layout } from "@/components/layout/Layout";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

const CONTACT_ITEMS = [
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 96866 92255",
    href: "https://wa.me/919686692255",
    iconColor: "#25D366",
    description: "Chat with us directly",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    value: "@daivamorigins",
    href: "https://www.instagram.com/daivamorigins/",
    iconColor: "#C13584",
    description: "Follow our journey",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "contact@daivamorigins.com",
    href: "mailto:contact@daivamorigins.com",
    iconColor: "#000",
    description: "Write to us anytime",
  },
];

export default function Contact() {
  return (
    <Layout>
      <div className="px-5 md:px-10 py-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-black/50 font-medium mb-1">Daivam Origins</p>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Get in Touch</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* public/images/img21.png — Contact hero */}
          <div className="relative overflow-hidden" style={{ height: "clamp(280px, 45vw, 520px)" }}>
            <img
              src="/images/img21.png"
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

          {/* Contact options */}
          <div className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ Icon, label, value, href, iconColor, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 transition-colors"
                style={{ background: "#f7f5f2" }}
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                  <Icon size={22} color={iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-black/40 font-medium mb-0.5">{label}</p>
                  <p className="text-sm font-bold text-black group-hover:opacity-50 transition-opacity leading-snug truncate">{value}</p>
                  <p className="text-[11px] text-black/50 mt-0.5">{description}</p>
                </div>
                <span className="text-black/20 text-base group-hover:text-black/50 transition-colors">→</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
