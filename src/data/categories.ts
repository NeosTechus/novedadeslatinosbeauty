export interface SubItem {
  name: string;
  note?: string;
}

export interface Category {
  id: string;
  name: string;
  subItems: SubItem[];
  note?: string;
  sectionNote?: string;
}

export const categories: Category[] = [
  {
    id: "footwear",
    name: "Footwear",
    subItems: [
      { name: "Western Leather Boots" },
      { name: "Work Boots & Work Shoes" },
      { name: "Animal Skin boots" },
    ],
    note: "Sizes 6–11, prices vary by style and size",
  },
  {
    id: "soccer",
    name: "Soccer",
    subItems: [],
    note: "Sizes vary by age, prices vary by size and team",
    sectionNote: "Soccer cleats, gloves, body gear, soccer balls, and accessories available",
  },
  {
    id: "shirts-jackets",
    name: "Shirts & Jackets",
    subItems: [
      { name: "Graphic Shirts" },
      { name: "Formal Button-Up Shirts" },
    ],
    note: "Sizes vary by age, prices vary by size ",
  },
  {
    id: "traditional-wear",
    name: "Traditional Wear",
    subItems: [
      { name: "Made in Mexico (Women)" },
      { name: "Party Wear" },
    ],
    note: "Multiple sizes, prices vary by style and occasion. Baptism Attire and Communion Attire are also available.",
  },
  {
    id: "religious-items",
    name: "Religious Items",
    subItems: [
      { name: "Religious Figures" },
      { name: "Baptism and Communion Candles" },
    ],
    note: "Multiple sizes, prices vary by size",
  },
  {
    id: "accessories",
    name: "Accessories",
    subItems: [
      { name: "Belts" },
      { name: "Cowboy Hats" },
      { name: "Casual Hats" },
    ],
    note: "Multiple sizes, prices vary by style",
  },
];

export const categoryNames = ["All", ...categories.map((c) => c.name)];

// Note for "All" category
export const allCategoryNote = "Browse our complete collection of footwear, soccer gear, shirts & jackets, traditional wear, religious items, and accessories. Sizes and prices vary by product.";

// Get all subcategory names for a category
export const getSubcategoriesForCategory = (categoryName: string): string[] => {
  const category = categories.find(c => c.name === categoryName);
  return category ? category.subItems.map(s => s.name) : [];
};
