"use server";
import { revalidatePath } from "next/cache";
import { removeProductCartFactory } from "@/backend/useCase/cart/removeProduct/removeProductFactory";
import { deleteProductCartFactory } from "@/backend/useCase/ProductCart/deleteCase/deleteFactory";

export default async function subtractProductCartInCartServerAction(
  productCartId: string,
) {
  const subtractProductCart = await deleteProductCartFactory().handle(
    productCartId
  );
  revalidatePath("/cart");
  return subtractProductCart;
}
