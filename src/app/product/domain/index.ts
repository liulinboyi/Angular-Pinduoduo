import { Product } from 'src/app/share/domain';
import { imageSlider } from 'src/app/share/components';

export interface ProductVariant {
  id: number;
  name: string;
  product: Product;
  price: number;
  listPrice: number;
  productVariantImages: imageSlider[];
}

export interface GroupOrder {
  id: number;
  productId: number;
  startBy: string;
  avatar: string;
  startAt: Date;
  remainingNumber: number;
}
