import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Stay Updated
          </span>
          <h2 className="section-title mt-2 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new arrivals, exclusive offers, and style inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary px-5">
              <span className="hidden sm:inline mr-2">Subscribe</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
