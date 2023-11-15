"use server";

import validateIfUserHaveCart from "@/serverActions/prismaRepository/cart/validateIfCartExists";

export default async function getCartByUserIdServerAction(userId: string) {
  const cartByUserId = await validateIfUserHaveCart({userId})
  return cartByUserId;
}
