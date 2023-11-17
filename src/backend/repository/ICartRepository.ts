import { CartIncludeProductCart } from "@/types";
import { Cart } from "@prisma/client";

export interface IUserParams {
  userId?: string;
  total?: number;
}

export interface IUpdateCartTotal {
  total?: number;
  cartId?: string;
}

export interface ICartRepository {
  list: () => Promise<Cart[] | null>;
  create: (reference: string) => Promise<Cart | null>;
  delete: (reference: string) => Promise<Cart | null>;
  getById: (reference: string) => Promise<Cart | null>;
  getByUserId: (reference: string) => Promise<Cart | null>;
  updateTotal: ( params :IUpdateCartTotal) => Promise<Cart | null>;
}
