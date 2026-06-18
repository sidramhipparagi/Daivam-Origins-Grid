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
    <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-6 md:p-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-xs uppercase font-bold tracking-widest">Full Name</Label>
        <Input 
          id="name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="bg-background border-border rounded-none h-12 uppercase"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs uppercase font-bold tracking-widest">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="bg-background border-border rounded-none h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-xs uppercase font-bold tracking-widest">Subject</Label>
        <Input 
          id="subject" 
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          className="bg-background border-border rounded-none h-12 uppercase"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs uppercase font-bold tracking-widest">Message</Label>
        <Textarea 
          id="message" 
          required 
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="bg-background border-border rounded-none resize-none uppercase"
        />
      </div>

      <Button 
        type="submit" 
        disabled={contactMutation.isPending}
        className="w-full h-14 rounded-none font-black text-lg tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {contactMutation.isPending ? "SENDING..." : "SUBMIT INQUIRY"}
      </Button>
    </form>
  );
}
