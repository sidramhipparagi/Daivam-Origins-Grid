import { Link } from "wouter";
import { ContactModal } from "@/components/ContactModal";

export function Footer() {
  return (
    <footer className="bg-white pt-14 pb-8 px-5 md:px-10" style={{ borderTop: "1px solid #f0eeeb" }}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-3">Daivam Origins</h2>
          <p className="text-xs text-black/50 leading-relaxed max-w-xs">
            Exporting ancient Indian crafts to the modern world. Each piece carries centuries of tradition.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Shop</h3>
          <ul className="space-y-3">
            <li><Link href="/products/nataraja" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Nataraja</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Policies</h3>
          <ul className="space-y-3">
            <li><Link href="/shipping" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Shipping</Link></li>
            <li><Link href="/terms" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Terms</Link></li>
            <li><Link href="/privacy" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Privacy</Link></li>
            <li><Link href="/return" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Return & Refund</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Info</h3>
          <ul className="space-y-3">
            <li><Link href="/editorial" className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Editorial</Link></li>
            <li>
              <ContactModal>
                <button className="text-xs text-black/60 hover:text-black transition-colors uppercase tracking-widest">Contact</button>
              </ContactModal>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3" style={{ borderTop: "1px solid #f0eeeb" }}>
        <p className="text-[10px] text-black/40 uppercase tracking-widest">
          © {new Date().getFullYear()} Daivam Origins.
        </p>
        <p className="text-[10px] text-black/40 uppercase tracking-widest">
          Touch the Origin
        </p>
      </div>
    </footer>
  );
}
