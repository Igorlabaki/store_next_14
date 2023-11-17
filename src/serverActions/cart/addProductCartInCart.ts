"use server";

import { createProductCartFactory } from "@/backend/useCase/ProductCart/createCase/createFactory";

export default async function addProductCartInCartServerAction(
  userId: string,
  productId: string,
  quantity: number
) {
 const newProductCart = await createProductCartFactory().handle(userId,productId,quantity)
 return newProductCart
}






























/* const userHaveCart: Cart | null = await validateIfUserHaveCart({ userId });

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
} */