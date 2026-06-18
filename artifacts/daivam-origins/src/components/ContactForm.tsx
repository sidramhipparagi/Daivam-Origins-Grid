import { useState } from "react";
import { useSubmitContact } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(
      { data: formData },
      {
        onSuccess: () => {
          toast({
            title: "MESSAGE RECEIVED",
            description: "We will respond shortly.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "ERROR",
            description: "Failed to send message.",
          });
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-black p-6 md:p-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[0.75rem] uppercase font-bold tracking-widest text-black">Full Name</Label>
        <Input 
          id="name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="bg-white border-black text-black rounded-none h-12 uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[0.75rem] uppercase font-bold tracking-widest text-black">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="bg-white border-black text-black rounded-none h-12 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-[0.75rem] uppercase font-bold tracking-widest text-black">Subject</Label>
        <Input 
          id="subject" 
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          className="bg-white border-black text-black rounded-none h-12 uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[0.75rem] uppercase font-bold tracking-widest text-black">Message</Label>
        <Textarea 
          id="message" 
          required 
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="bg-white border-black text-black rounded-none resize-none uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <Button 
        type="submit" 
        disabled={contactMutation.isPending}
        className="w-full h-14 rounded-none font-bold text-[0.8rem] tracking-widest uppercase bg-black text-white hover:bg-black/90 mt-4"
      >
        {contactMutation.isPending ? "SENDING..." : "SUBMIT INQUIRY"}
      </Button>
    </form>
  );
}
