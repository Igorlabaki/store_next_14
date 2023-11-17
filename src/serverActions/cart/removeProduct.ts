"use server";

import { deleteProductCartFactory } from "@/backend/useCase/ProductCart/deleteCase/deleteFactory";
import { revalidatePath } from "next/cache";

export default async function deleteProductFromCartServerAction(
  productCartId: string
) {
  const deletedProductCart = await deleteProductCartFactory().handle(
    productCartId
  );

  revalidatePath("/cart")

  return deletedProductCart;
}
