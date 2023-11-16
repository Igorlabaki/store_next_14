import { prismaClient } from "@/services/prismaClient";

interface GetCartByUserIdParams {
  userId: string | undefined;
}

export default async function getCartByUserId({
  userId,
}: GetCartByUserIdParams) {
  if(userId){
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
}
