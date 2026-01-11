import { ShoppingBag, Menu, X, Phone, MapPin, ChevronDown, View } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFilter } from "@/context/FilterContext";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { categories } from "@/data/categories";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { openCart, totalItems } = useCart();
  const { setFilter, setCategory } = useFilter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setCategory(categoryName);
    scrollToProducts();
  };

  const handleSubCategoryClick = (categoryName: string, subCategoryName: string) => {
    setFilter(categoryName, subCategoryName);
    scrollToProducts();
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:314-696-2004" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone size={14} />
                <span>314-696-2004</span>
              </a>
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin size={14} />
                <span>2733 Cherokee Street</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">We have the best prices!</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Open 7 Days • 10am - 7:30pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-18 md:h-20 items-center justify-between py-3">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Novedades Latinos Beauty" 
                className="h-14 md:h-16 w-auto rounded-lg"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-gradient">
                  Novedades Latinos
                </span>
                <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  BEAUTY & FASHION
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-2 ml-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="nav-link bg-transparent px-4 py-2 rounded font-medium text-base text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* 360 View Button */}
              <a
                href="https://maps.app.goo.gl/mVMqLBzTfaxnVn4s5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
              >
                <View size={18} />
                <span className="hidden sm:inline">360° View</span>
              </a>

              {/* Cart Button removed */}
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-1">
                {categories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => setExpandedCategory(
                        expandedCategory === category.id ? null : category.id
                      )}
                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors"
                    >
                      {category.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedCategory === category.id && (
                      <div className="ml-4 border-l border-border pl-3 py-1 animate-fade-in">
                        <button
                          onClick={() => {
                            handleCategoryClick(category.name);
                            setMobileMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          All {category.name}
                        </button>
                        {category.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              handleSubCategoryClick(category.name, subItem.name);
                              setMobileMenuOpen(false);
                            }}
                            className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                        {category.note && (
                          <p className="py-2 text-xs text-muted-foreground border-t border-border mt-2">
                            <span className="font-medium">Note:</span> {category.note}
                          </p>
                        )}
                        {category.sectionNote && (
                          <p className="py-1 text-xs text-muted-foreground italic">
                            {category.sectionNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;