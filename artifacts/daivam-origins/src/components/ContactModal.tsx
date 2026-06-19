import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

const CONTACT_ITEMS = [
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 96866 92255",
    href: "https://wa.me/919686692255",
    iconColor: "#25D366",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    value: "@daivamorigins",
    href: "https://www.instagram.com/daivamorigins/",
    iconColor: "#C13584",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "contact@daivamorigins.com",
    href: "mailto:contact@daivamorigins.com",
    iconColor: "#000",
  },
];

export function ContactModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-sm bg-white rounded-none p-0 gap-0 border-0 shadow-2xl">
        <div className="p-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 font-medium mb-1">Daivam Origins</p>
          <h2 className="text-xl font-bold text-black mb-8">Get in Touch</h2>

          <div className="flex flex-col gap-5">
            {CONTACT_ITEMS.map(({ Icon, label, value, href, iconColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f7f5f2" }}
                >
                  <Icon size={20} color={iconColor} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] uppercase tracking-widest text-black/40 font-medium">{label}</p>
                  <p className="text-sm font-semibold text-black group-hover:opacity-50 transition-opacity leading-snug">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
