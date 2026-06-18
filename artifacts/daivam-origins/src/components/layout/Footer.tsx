import { Link } from "wouter";
import { ContactModal } from "@/components/ContactModal";

export function Footer() {
  return (
    <footer className="border-t border-black bg-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-2 text-black">
            <h2 className="font-sans text-lg font-bold tracking-widest mb-4">DAIVAM ORIGINS</h2>
            <p className="text-[0.75rem] max-w-sm uppercase tracking-widest font-normal leading-relaxed">
              Exporting ancient Indian crafts to the modern world. A sacred museum in your hands.
            </p>
          </div>

          <div className="text-black">
            <h3 className="font-bold text-[0.75rem] mb-4 tracking-widest uppercase">Shop</h3>
            <ul className="space-y-3 text-[0.75rem] uppercase tracking-widest font-normal">
              <li><Link href="/products" className="hover:underline underline-offset-4">All Products</Link></li>
              <li><Link href="/categories/bronze" className="hover:underline underline-offset-4">Bronze</Link></li>
              <li><Link href="/categories/stone" className="hover:underline underline-offset-4">Stone</Link></li>
              <li><Link href="/categories/terracotta" className="hover:underline underline-offset-4">Terracotta</Link></li>
            </ul>
          </div>

          <div className="text-black">
            <h3 className="font-bold text-[0.75rem] mb-4 tracking-widest uppercase">Policies</h3>
            <ul className="space-y-3 text-[0.75rem] uppercase tracking-widest font-normal">
              <li><Link href="/shipping" className="hover:underline underline-offset-4">Shipping</Link></li>
              <li><Link href="/terms" className="hover:underline underline-offset-4">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:underline underline-offset-4">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="text-black">
            <h3 className="font-bold text-[0.75rem] mb-4 tracking-widest uppercase">Support</h3>
            <ul className="space-y-3 text-[0.75rem] uppercase tracking-widest font-normal">
              <li><Link href="/editorial" className="hover:underline underline-offset-4">Editorial</Link></li>
              <li>
                <ContactModal>
                  <button className="hover:underline underline-offset-4 uppercase">Contact Us</button>
                </ContactModal>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] font-normal tracking-widest text-black uppercase">
          <p>&copy; {new Date().getFullYear()} DAIVAM ORIGINS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
