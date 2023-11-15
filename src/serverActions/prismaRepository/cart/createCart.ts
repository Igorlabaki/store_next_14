import { prismaClient } from "@/services/prismaClient";

interface CreateCartParams {
  userId: string;
}

export default async function createCart({ userId }: CreateCartParams) {
  const createUserCart = await prismaClient.cart.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return createUserCart;
}
