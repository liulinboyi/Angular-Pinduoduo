export interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}
export interface Ad {
  imageUrl: string;
  link: string;
}
export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  tags: string[];
  price: string;
  priceDesc: string;
  buyerAvatars: string[];
}
