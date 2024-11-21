export enum ProductPriceRange {
  LOW = '0-100',
  MEDIUM = '100-250',
  HARD = '250+'
}

export interface ProductFilterParams {
  name: string;
  price: number;
  type: ProductType[];
  priceRange: ProductPriceRange[];
}

export interface AppState {
  productState: ProductState;
}

export interface ProductState {
  products: Product[];
  selectedProducts: Product[];
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  type: ProductType;
  description: string;
  reviews: ProductReview[];
}

export interface ProductReview {
  reviewer: string;
  comment: string;
  rate: number;
}

export enum ProductType {
  TVs = 'TVs',
  Appliances = 'Appliances',
  Phones = 'Phones',
  VideoGames = 'Video Games'
}
