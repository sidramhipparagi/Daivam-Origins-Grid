import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { ReactNode } from "react";

export function ContactModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-border rounded-none p-0 gap-0">
        <DialogHeader className="p-6 md:p-8 pb-0 border-b border-border bg-card">
          <DialogTitle className="font-black text-2xl tracking-tighter uppercase mb-4">ENQUIRE</DialogTitle>
        </DialogHeader>
        <div className="p-6 md:p-8">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
