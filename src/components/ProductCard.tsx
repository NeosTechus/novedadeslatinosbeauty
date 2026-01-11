import { Product } from "@/types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  // Carousel state
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = product.slideImages && product.slideImages.length > 0
    ? product.slideImages
    : [product.image];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="product-card group">
      <div className="product-image-wrapper relative">
        <img
          src={slides[slideIdx]}
          alt={product.name}
          loading="lazy"
        />
        {slides.length > 1 && (
          <>
            <button
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 text-xs shadow hover:bg-white"
              onClick={prevSlide}
              aria-label="Previous image"
              tabIndex={0}
            >
              &#8592;
            </button>
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 text-xs shadow hover:bg-white"
              onClick={nextSlide}
              aria-label="Next image"
              tabIndex={0}
            >
              &#8594;
            </button>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === slideIdx ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </>
        )}
        {product.isNew && <span className="badge-new">New</span>}
        {hasDiscount && <span className="badge-sale">-{discountPercent}%</span>}
      </div>
      <div className="p-4 md:p-5">
        <div className="mb-1.5">
          <p className="text-xs text-muted-foreground tracking-wide uppercase font-medium">
            {product.category}
          </p>
          {product.subCategory && (
            <p className="text-[10px] text-muted-foreground/70 tracking-wide">
              {product.subCategory}
            </p>
          )}
        </div>
        <h3 className="font-display text-base md:text-lg font-semibold mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {/* <span className="price-tag">{product.price}</span> */}
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {/* {product.originalPrice} */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
