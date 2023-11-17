"use server";
import { revalidatePath } from "next/cache";
import { removeProductCartFactory } from "@/backend/useCase/cart/removeProduct/removeProductFactory";

export default async function subtractProductCartInCartServerAction(
  userId: string,
  productId: string,
  quantity: number
) {
  const subtractProductCart = await removeProductCartFactory().handle(
    userId,
    productId,
    quantity
  );
  revalidatePath("/cart");
  return subtractProductCart;
}
