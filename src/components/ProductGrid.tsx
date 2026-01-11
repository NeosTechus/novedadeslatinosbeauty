import { useState } from "react";
import { products } from "@/data/products";
import { categories, categoryNames, allCategoryNote } from "@/data/categories";
import { useFilter } from "@/context/FilterContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
    // Show only 4 rows (16 products) by default, with a View More button
    const [visibleCount, setVisibleCount] = useState(2 * 4); // 2 rows * 4 per row
  const { filter, setCategory, setFilter } = useFilter();
  const { category: selectedCategory, subCategory: selectedSubCategory } = filter;

  const filteredProducts = selectedCategory === "All"
    ? products
    : selectedSubCategory
      ? products.filter((p) => p.category === selectedCategory && p.subCategory === selectedSubCategory)
      : products.filter((p) => p.category === selectedCategory);
  const PRODUCTS_PER_ROW = 4;
  const ROWS_TO_SHOW = 2;
  const INITIAL_COUNT = PRODUCTS_PER_ROW * ROWS_TO_SHOW;
  const productsToShow = filteredProducts.slice(0, visibleCount);

  const currentCategory = categories.find(c => c.name === selectedCategory);
  const currentSubCategories = currentCategory?.subItems || [];

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  const handleSubCategoryClick = (subCategory: string) => {
    if (selectedSubCategory === subCategory) {
      // Clicking the same subcategory clears it
      setFilter(selectedCategory, null);
    } else {
      setFilter(selectedCategory, subCategory);
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent">
            Our Collection
          </span>
          <h2 className="section-title mt-3 mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find boots, hats, western wear, baptism and communion dresses, and much more.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-badge ${
                selectedCategory === category
                  ? "category-badge-active"
                  : "category-badge-inactive"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategory Filters */}
        {selectedCategory !== "All" && currentSubCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
            <button
              onClick={() => setFilter(selectedCategory, null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                !selectedSubCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              All {selectedCategory}
            </button>
            {currentSubCategories.map((subItem) => (
              <button
                key={subItem.name}
                onClick={() => handleSubCategoryClick(subItem.name)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  selectedSubCategory === subItem.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {subItem.name}
              </button>
            ))}
          </div>
        )}

        {/* Category Info Notes */}
        {selectedCategory === "All" && (
          <div className="text-center mb-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-foreground">
              <span className="font-medium">Note:</span> {allCategoryNote}
            </p>
          </div>
        )}
        {currentCategory && (currentCategory.note || currentCategory.sectionNote) && (
          <div className="text-center mb-8 p-4 bg-muted/50 rounded-lg space-y-2">
            {currentCategory.note && (
              <p className="text-sm text-foreground">
                <span className="font-medium">Note:</span> {currentCategory.note}
              </p>
            )}
            {currentCategory.sectionNote && (
              <p className="text-sm text-muted-foreground italic">
                {currentCategory.sectionNote}
              </p>
            )}
          </div>
        )}

        {/* Active Filter Display */}
        {selectedSubCategory && (
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground">
              Showing: <span className="font-medium text-foreground">{selectedSubCategory}</span>
              <button
                onClick={() => setFilter(selectedCategory, null)}
                className="ml-2 text-accent hover:text-accent/80 transition-colors"
              >
                (Clear)
              </button>
            </span>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsToShow.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {filteredProducts.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button
              className="btn-primary px-6 py-2 rounded-full text-base font-semibold"
              onClick={() => setVisibleCount(visibleCount + 2 * 4)}
            >
              View More
            </button>
          </div>
        )}
        {visibleCount > 2 * 4 && (
          <div className="flex justify-center mt-4">
            <button
              className="btn-secondary px-6 py-2 rounded-full text-base font-semibold"
              onClick={() => setVisibleCount(2 * 4)}
            >
              Show Less
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products in this category.</p>
            <button
              onClick={() => setCategory("All")}
              className="mt-4 text-accent hover:text-accent/80 transition-colors"
            >
              View all products
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <a href="tel:314-696-2004" className="btn-secondary">
            Call us for more options
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;