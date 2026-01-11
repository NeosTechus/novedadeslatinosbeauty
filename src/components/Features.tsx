import { Truck, Shield, Clock, Phone, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Authentic products",
  },
  {
    icon: Clock,
    title: "Open 7 Days",
    description: "10am - 7:30pm",
  },
  {
    icon: Phone,
    title: "Personal Service",
    description: "314-696-2004",
  },
  {
    icon: Heart,
    title: "Your Neighborhood",
    description: "Beauty Store",
  },
];

const Features = () => {
  return (
    <section className="py-14 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title + feature.description}
              className="flex flex-col items-center text-center p-4 md:p-6 animate-fade-in rounded-xl hover:bg-primary-foreground/5 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mb-4 shadow-lg">
                <feature.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
