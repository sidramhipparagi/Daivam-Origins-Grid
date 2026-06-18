import { Link } from "wouter";
import { ContactModal } from "@/components/ContactModal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-sans text-3xl font-black tracking-tighter mb-4">DAIVAM ORIGINS</h2>
            <p className="text-muted-foreground text-sm max-w-sm uppercase tracking-wider font-bold">
              Exporting ancient Indian crafts to the modern world. A sacred museum in your hands.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 tracking-widest uppercase">Shop</h3>
            <ul className="space-y-2 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/categories/bronze" className="hover:text-primary transition-colors">Bronze</Link></li>
              <li><Link href="/categories/stone" className="hover:text-primary transition-colors">Stone</Link></li>
              <li><Link href="/categories/terracotta" className="hover:text-primary transition-colors">Terracotta</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 tracking-widest uppercase">Policies</h3>
            <ul className="space-y-2 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 tracking-widest uppercase">Support</h3>
            <ul className="space-y-2 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              <li><Link href="/editorial" className="hover:text-primary transition-colors">Editorial</Link></li>
              <li>
                <ContactModal>
                  <button className="hover:text-primary transition-colors uppercase">Contact Us</button>
                </ContactModal>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          <p>&copy; {new Date().getFullYear()} DAIVAM ORIGINS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
