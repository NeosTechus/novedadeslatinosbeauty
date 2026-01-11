export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slideImages?: string[];
  category: string;
  subCategory?: string;
  description: string;
  isNew?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
