export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
