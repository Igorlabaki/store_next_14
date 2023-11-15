import { prismaClient } from "@/services/prismaClient";
import { Cart } from "@prisma/client";

interface ValidateIfUserHaveCartParams {
  userId: string;
}

export default async function validateIfUserHaveCart({
  userId,
}: ValidateIfUserHaveCartParams) {
  const cartAlreadyExist: Cart | null = await prismaClient.cart.findFirst({
    where: {
      userId: userId,
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

  return cartAlreadyExist;
}
