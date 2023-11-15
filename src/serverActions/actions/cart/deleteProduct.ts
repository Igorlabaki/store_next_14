"use server";

import getCartById from "@/serverActions/prismaRepository/cart/getCartById";
import updateCartTotal from "@/serverActions/prismaRepository/cart/updateCartTotal";
import deleteProductCart from "@/serverActions/prismaRepository/productCart/deleteProductCart";
import { ProductCartIncludeCartProduct } from "@/types";
import { revalidatePath } from "next/cache";

export default async function deleteProductServerAction(
  productCart: ProductCartIncludeCartProduct
) {
  const cart = await getCartById({ cartId: productCart.fk_id_cart });

  if (cart) {
    await updateCartTotal({
      cartId: cart.id,
      cartTotal:
        cart.total - productCart.quantity * parseInt(productCart.product.price),
    });

    const deletedProductCart = await deleteProductCart({
      productCartId: productCart.id,
    });

    revalidatePath("/cart");

    return deletedProductCart;
  }
}
