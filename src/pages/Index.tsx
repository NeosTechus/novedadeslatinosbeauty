import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import StoreInfo from "@/components/StoreInfo";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Features />
        <StoreInfo />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
