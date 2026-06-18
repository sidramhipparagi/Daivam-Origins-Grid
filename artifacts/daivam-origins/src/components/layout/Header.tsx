import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <Link href="/" className="font-sans text-xl md:text-2xl font-black tracking-tighter hover:text-primary transition-colors">
            DAIVAM ORIGINS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase">
            <Link href="/products" className="hover:text-primary transition-colors">Shop</Link>
            <Link href="/editorial" className="hover:text-primary transition-colors">Editorial</Link>
            <ContactModal>
              <button className="hover:text-primary transition-colors uppercase font-bold tracking-widest">Contact</button>
            </ContactModal>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 flex flex-col items-center justify-center gap-8 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-3xl font-black tracking-tighter uppercase">
            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/products" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/editorial" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Editorial</Link>
            <Link href="/shipping" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Shipping</Link>
            <Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}
