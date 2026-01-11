import { MapPin, Phone, Clock } from "lucide-react";

const StoreInfo = () => {
  const hours = [
    { day: "Monday", hours: "10:00am - 7:30pm", open: true },
    { day: "Tuesday", hours: "Closed", open: false },
    { day: "Wednesday", hours: "10:00am - 7:30pm", open: true },
    { day: "Thursday", hours: "10:00am - 7:30pm", open: true },
    { day: "Friday", hours: "10:00am - 7:30pm", open: true },
    { day: "Saturday", hours: "10:00am - 7:30pm", open: true },
    { day: "Sunday", hours: "10:00am - 7:30pm", open: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Map / Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="/photos/IMG_8705.jpg"
              alt="Our store"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-2">Visit Us</h3>
              <p className="text-sm opacity-90">We're waiting for you with the best prices!</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Our Location
              </span>
              <h2 className="section-title mt-2">Find Us</h2>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Address</h4>
                <p className="text-muted-foreground">
                  2733 Cherokee Street<br />
                  St. Louis, MO
                </p>
                <a
                  href="https://maps.google.com/?q=2733+Cherokee+Street+St+Louis+MO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline mt-2 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Phone</h4>
                <a
                  href="tel:314-696-2004"
                  className="text-xl font-bold text-primary hover:text-accent transition-colors"
                >
                  314-696-2004
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-4 mt-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <a
                  href="https://www.facebook.com/dulce.barrera.611254?rdid=BkLKddFpVuoWUNe0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZQVFg4wCL%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-full h-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Facebook</h4>
                <a
                  href="https://www.facebook.com/dulce.barrera.611254?rdid=BkLKddFpVuoWUNe0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZQVFg4wCL%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-primary hover:text-accent transition-colors"
                >
                  Join the Community
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-semibold mb-3">Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                        item.open ? "bg-background" : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.open ? "text-muted-foreground" : "font-semibold"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
