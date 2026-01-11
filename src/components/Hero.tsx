import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh] py-12 md:py-16">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">+500 satisfied customers</span>
            </div>
            
            <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
              New Collection 2025
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Authentic
              <br />
              <span className="text-gradient italic">Latino</span>
              <br />
              Style
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover our collection of boots, hats, western wear and more. 
              <span className="font-semibold text-foreground"> Best prices on Cherokee Street!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-accent group">
                View Products
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:314-696-2004" className="btn-secondary">
                Call Us: 314-696-2004
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">🇲🇽</span>
                </div>
                <span className="text-sm font-medium">Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">👢</span>
                </div>
                <span className="text-sm font-medium">Leather Boots</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&h=1000&fit=crop"
                alt="Premium western boots"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-background/98 backdrop-blur p-4 md:p-6 rounded-xl shadow-xl max-w-[200px] md:max-w-xs border border-border">
              <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                Best Seller
              </p>
              <p className="font-display text-lg font-semibold">
                Western Boots
              </p>
              <p className="text-sm text-muted-foreground">
                From $149
              </p>
            </div>

            {/* Hours badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              Open Today 10-7:30
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
