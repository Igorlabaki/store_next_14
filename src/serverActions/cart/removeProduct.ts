"use server";

import { removeProductCartFactory } from "@/backend/useCase/cart/removeProduct/removeProductFactory";
import { revalidatePath } from "next/cache";

export default async function removeProductFromCartServerAction(
  productCartId: string
) {
  const deletedProductCart = await removeProductCartFactory().handle(
    productCartId
  );

  revalidatePath("/cart")

  return deletedProductCart;
}
