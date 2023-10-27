import { Product } from "./product.interface";

export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
