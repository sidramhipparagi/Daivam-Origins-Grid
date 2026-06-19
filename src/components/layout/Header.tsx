import { Link } from "wouter";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white" style={{ borderBottom: "1px solid #f0eeeb" }}>
        <div className="flex h-14 items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center">
            {/* public/images/logo.png — Header logo */}
            <img src="/images/logo.png" alt="Daivam Origins" className="h-6 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-black">
            <Link href="/products" className="hover:opacity-50 transition-opacity">Shop</Link>
            <Link href="/editorial" className="hover:opacity-50 transition-opacity">Editorial</Link>
            <ContactModal>
              <button className="hover:opacity-50 transition-opacity uppercase tracking-widest text-xs font-medium">Contact</button>
            </ContactModal>
          </nav>

          {/* Mobile — search icon triggers nav overlay */}
          <button
            className="md:hidden text-black p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={18} strokeWidth={1.5} /> : <Search size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
          {/* Top bar mirrors header */}
          <div className="flex h-14 items-center justify-between px-5" style={{ borderBottom: "1px solid #f0eeeb" }}>
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              {/* public/images/logo.png — Header logo */}
              <img src="/images/logo.png" alt="Daivam Origins" className="h-6 w-auto object-contain" />
            </Link>
            <button className="text-black p-1" onClick={() => setIsOpen(false)}>
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav links — left-aligned, generous spacing */}
          <nav className="flex flex-col px-5 pt-10 gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Shop" },
              { href: "/editorial", label: "Editorial" },
              { href: "/shipping", label: "Shipping" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-4 text-2xl font-bold tracking-tight text-black hover:opacity-40 transition-opacity"
                style={{ borderBottom: "1px solid #f5f5f5" }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Bottom tagline */}
          <p className="mt-auto px-5 pb-8 text-xs uppercase tracking-widest text-black/30 font-medium">
            Ancient Crafts · World Destinations
          </p>
        </div>
      )}
    </>
  );
}
