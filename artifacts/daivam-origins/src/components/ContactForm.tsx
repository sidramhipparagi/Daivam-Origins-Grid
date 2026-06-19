import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 flex flex-col items-start gap-4 min-h-[200px] justify-center">
        <p className="text-xs uppercase tracking-widest text-black/50 font-medium">Message received</p>
        <p className="text-base font-bold text-black">Thank you, {formData.name}.</p>
        <p className="text-sm text-black/60 leading-relaxed">
          We will review your enquiry and respond to {formData.email} shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-4 text-xs uppercase tracking-widest text-black underline underline-offset-4 hover:opacity-50 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8">
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-[0.7rem] uppercase font-medium tracking-widest text-black/60">Full Name</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="bg-white border-black/20 text-black rounded-none h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-[0.7rem] uppercase font-medium tracking-widest text-black/60">Email Address</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="bg-white border-black/20 text-black rounded-none h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject" className="text-[0.7rem] uppercase font-medium tracking-widest text-black/60">Subject</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
          className="bg-white border-black/20 text-black rounded-none h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-[0.7rem] uppercase font-medium tracking-widest text-black/60">Message</Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          className="bg-white border-black/20 text-black rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-none font-bold text-xs tracking-widest uppercase bg-black text-white hover:bg-black/85 mt-2"
      >
        {loading ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
