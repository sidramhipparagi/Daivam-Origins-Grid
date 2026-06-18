import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white" style={{ borderBottom: "1px solid #f0eeeb" }}>
        <div className="flex h-14 items-center justify-between px-5 md:px-10">
          <Link href="/" className="font-sans text-sm font-bold tracking-widest text-black uppercase">
            Daivam Origins
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-black">
            <Link href="/products" className="hover:opacity-50 transition-opacity">Shop</Link>
            <Link href="/editorial" className="hover:opacity-50 transition-opacity">Editorial</Link>
            <ContactModal>
              <button className="hover:opacity-50 transition-opacity uppercase tracking-widest text-xs font-medium">Contact</button>
            </ContactModal>
          </nav>

          <button
            className="md:hidden text-black p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-4 right-5 text-black"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
          <nav className="flex flex-col items-center gap-7">
            <Link href="/" className="text-xl font-bold tracking-widest uppercase text-black" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/products" className="text-xl font-bold tracking-widest uppercase text-black" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/editorial" className="text-xl font-bold tracking-widest uppercase text-black" onClick={() => setIsOpen(false)}>Editorial</Link>
            <Link href="/shipping" className="text-xl font-bold tracking-widest uppercase text-black" onClick={() => setIsOpen(false)}>Shipping</Link>
            <Link href="/contact" className="text-xl font-bold tracking-widest uppercase text-black" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}
