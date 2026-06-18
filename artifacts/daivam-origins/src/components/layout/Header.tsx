import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
        <div className="flex h-16 items-center justify-between px-6 md:px-12">
          <Link href="/" className="font-sans text-[0.85rem] font-bold tracking-widest text-black uppercase">
            DAIVAM ORIGINS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[0.75rem] font-medium tracking-widest uppercase text-black">
            <Link href="/products" className="hover:underline underline-offset-4">Shop</Link>
            <Link href="/editorial" className="hover:underline underline-offset-4">Editorial</Link>
            <ContactModal>
              <button className="hover:underline underline-offset-4 uppercase">Contact</button>
            </ContactModal>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-black p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 flex flex-col items-center justify-center gap-8 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-xl font-bold tracking-widest uppercase text-black">
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/products" className="hover:underline" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/editorial" className="hover:underline" onClick={() => setIsOpen(false)}>Editorial</Link>
            <Link href="/shipping" className="hover:underline" onClick={() => setIsOpen(false)}>Shipping</Link>
            <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}
