"use server";

import { deleteCartFactory } from "@/backend/useCase/cart/deleteCase/deleteFactory";
import { revalidatePath } from "next/cache";

export default async function deleteCartServerAction(userId: string) {
  const deletedCart = await deleteCartFactory().handle(userId)
  revalidatePath("/cart")

  return deletedCart;
}
