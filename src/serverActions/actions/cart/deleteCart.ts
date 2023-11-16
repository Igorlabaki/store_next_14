"use server";

import deleteCart from "@/serverActions/prismaRepository/cart/deleteCart";
import { prismaClient } from "@/services/prismaClient";
import { revalidatePath } from "next/cache";

export default async function deleteCartServerAction(userId: string) {
  const deletedCart = await deleteCart(userId);
   await prismaClient.productCart.deleteMany({
    where:{
      fk_id_cart: deletedCart.id
    }
  })
  revalidatePath("/cart")

  return deletedCart;
}
