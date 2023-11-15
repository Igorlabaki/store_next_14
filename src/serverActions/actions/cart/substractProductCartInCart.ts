"use server";
import { revalidatePath } from "next/cache";
import { prismaClient } from "@/services/prismaClient";
import { Cart } from "@prisma/client";
import validateIfUserHaveCart from "@/serverActions/prismaRepository/cart/validateIfCartExists";
import validateIfProductAlredyInCart from "@/serverActions/prismaRepository/productCart/validateIfProductAlredyInCart";
import updateCartTotal from "@/serverActions/prismaRepository/cart/updateCartTotal";

export default async function subtractProductCartInCartServerAction(
  userId: string,
  productId: string,
  quantity: number
) {
  const cartAlreadyExist: Cart | null = await validateIfUserHaveCart({
    userId,
  });

  if (cartAlreadyExist) {
    const productAlreadyInCart = await validateIfProductAlredyInCart({
      cartId: cartAlreadyExist.id,
      productId,
    });

    if (productAlreadyInCart) {
      const updatePorductCart = await prismaClient.productCart.update({
        where: {
          id: productAlreadyInCart.id,
        },
        data: {
          quantity,
        },
        include: {
          cart: true,
          product: true,
        },
      });

      await updateCartTotal({
        cartId: cartAlreadyExist.id,
        cartTotal:
          cartAlreadyExist.total - parseInt(updatePorductCart.product.price),
      });

      revalidatePath("/cart");
      return updatePorductCart;
    }
  }
}
