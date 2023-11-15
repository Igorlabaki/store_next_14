"use server";

import createCart from "@/serverActions/prismaRepository/cart/createCart";
import updateCartTotal from "@/serverActions/prismaRepository/cart/updateCartTotal";
import validateIfUserHaveCart from "@/serverActions/prismaRepository/cart/validateIfCartExists";
import createProductCart from "@/serverActions/prismaRepository/productCart/createProductCart";
import updateProductCartQuantity from "@/serverActions/prismaRepository/productCart/updateProductQuantity";
import validateIfProductAlredyInCart from "@/serverActions/prismaRepository/productCart/validateIfProductAlredyInCart";
import { Cart } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function addProductCartInCartServerAction(
  userId: string,
  productId: string,
  quantity: number
) {
  const userHaveCart: Cart | null = await validateIfUserHaveCart({ userId });

  if (userHaveCart) {
    const productAlreadyInCart = await validateIfProductAlredyInCart({
      cartId: userHaveCart.id,
      productId,
    });

    if (productAlreadyInCart) {
      const productCart = await updateProductCartQuantity({
        productCartId: productAlreadyInCart.id,
        quantity,
      });

      updateCartTotal({
        cartId: userHaveCart.id,
        cartTotal: userHaveCart.total + parseInt(productCart.product.price),
      });

      revalidatePath("/cart");

      return productCart;
    }

    if (!productAlreadyInCart) {
      const newProductCart = await createProductCart({
        cartId: userHaveCart.id,
        productId,
        quantity,
      });

      updateCartTotal({
        cartId: userHaveCart.id,
        cartTotal: userHaveCart.total + parseInt(newProductCart.product.price),
      });

      revalidatePath("/cart");

      return newProductCart;
    }
  }

  if (!userHaveCart) {
    const newCart = await createCart({ userId });

    const newProductCart = await createProductCart({
      cartId: newCart.id,
      productId,
      quantity,
    });

    updateCartTotal({
      cartId: newCart.id,
      cartTotal: newCart.total + parseInt(newProductCart.product.price),
    });

    revalidatePath("/cart");

    return newProductCart;
  }
}
