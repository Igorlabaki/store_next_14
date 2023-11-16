"use server";

import deleteCart from "@/serverActions/prismaRepository/cart/deleteCart";
import { prismaClient } from "@/services/prismaClient";

export default async function deleteCartServerAction(userId: string) {
  const deletedCart = await deleteCart(userId);
  return deletedCart;
}
