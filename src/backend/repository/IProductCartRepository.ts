import { ProductCartIncludeCartProduct } from '@/types';
import { Product, ProductCart } from '@prisma/client';

export interface ICreateProductCartParams {
  cartId: string;
  quantity: number;
  productId: string;
}

export interface IVerifyIfProductAlreadyInCratParams {
  cartId: string;
  productId: string;
}

export interface IUpdateQuantity {
  quantity: number;
  producCartId: string;
}

export interface IProductCartRepository {
  list: (search?:string) => Promise<ProductCart[] | null>;
  delete: (reference: string) => Promise<ProductCartIncludeCartProduct | null>;
  getById: (reference: string) => Promise<ProductCart | null>;
  listByCartId: (cartId:string) => Promise<ProductCart[] | null>;
  updateQuantity: (reference: IUpdateQuantity) => Promise<ProductCartIncludeCartProduct | null>;
  create: (reference: ICreateProductCartParams) => Promise<ProductCartIncludeCartProduct | null>;
  verifyIfProductAlreadyInCart: (reference: IVerifyIfProductAlreadyInCratParams) => Promise<ProductCartIncludeCartProduct | null>;
}
