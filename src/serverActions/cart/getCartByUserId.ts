"use server";

import { getCartByUserIdFactory } from "@/backend/useCase/cart/getCartByUserIdCase/getCartByUserIdFactory";

export default async function getCartByUserIdServerAction(userId: string) {
  const cartByUserId = await getCartByUserIdFactory().handle(userId)
  return cartByUserId;
}
