import { prismaClient } from "@/services/prismaClient";

interface ValidateIfProductAlredyInCartParams {
  cartId: string | undefined;
  productId: string;
}

export default async function validateIfProductAlredyInCart({
  cartId,
  productId,
}: ValidateIfProductAlredyInCartParams) {
  const productAlreadyInCart = await prismaClient.productCart.findFirst({
    where: {
      cart: {
        id: cartId,
      },
      product: {
        id: productId,
      },
    },
    include: {
      product: true,
    },
  });

  return productAlreadyInCart;
}
