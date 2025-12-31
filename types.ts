
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Unisex' | 'Sunglasses' | 'Blue Light';
  image: string;
  description: string;
  isFeatured?: boolean;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Shop = 'shop'
}
