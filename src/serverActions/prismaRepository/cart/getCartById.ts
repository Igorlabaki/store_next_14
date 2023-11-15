import { prismaClient } from "@/services/prismaClient";

interface GetCartByIdParams {
  cartId: string;
}

export default async function getCartById({
    cartId,
}: GetCartByIdParams) {
  const cartById = await prismaClient.cart.findFirst({
    where: {
      id: cartId ,
    },
    include: {
      ProductCart: {
        include: {
          product: true,
          cart: true,
        },
      },
      user: true
    },
  });

  return cartById;
}
