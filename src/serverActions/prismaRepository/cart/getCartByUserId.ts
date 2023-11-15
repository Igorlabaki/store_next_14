import { prismaClient } from "@/services/prismaClient";

interface GetCartByUserIdParams {
  userId: string;
}

export default async function getCartByUserId({
  userId,
}: GetCartByUserIdParams) {
  const cartByUserId = await prismaClient.cart.findFirst({
    where: {
      userId,
    },
    include: {
      ProductCart: {
        include: {
          product: true,
          cart: true,
        },
      },
      user: true,
    },
  });

  return cartByUserId;
}
