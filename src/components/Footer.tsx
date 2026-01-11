import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const categories = ["Boots", "Hats", "Western Wear", "Baptism", "Communion", "Work", "Sportswear"];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-display font-bold">
                Novedades Latinos
              </span>
              <p className="text-sm text-primary-foreground/70 mt-1">Beauty & Fashion</p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Your trusted store for boots, hats, western wear, and clothing for special occasions on Cherokee Street.
            </p>
            <p className="text-lg font-semibold text-accent">
              Best prices guaranteed!
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  2733 Cherokee Street<br />
                  St. Louis, MO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:314-696-2004"
                  className="text-sm font-semibold hover:text-accent transition-colors"
                >
                  314-696-2004
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Open 7 days<br />
                  10am - 7:30pm<br />
                  <span className="text-destructive-foreground font-medium">Tuesday: Closed</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/dulce.barrera.611254?rdid=BkLKddFpVuoWUNe0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZQVFg4wCL%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-accent transition-colors flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                  <span className="ml-2 text-sm font-semibold">Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Visit Us</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              We're located in the heart of Cherokee Street. Come visit our store!
            </p>
            <a
              href="https://maps.google.com/?q=2733+Cherokee+Street+St+Louis+MO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Novedades Latinos Beauty. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Services provided by <a href="https://neostechus.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">NEOSTECH LLC</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
