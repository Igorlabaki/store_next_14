import { prismaClient } from "@/services/prismaClient";

interface UpdateCartTotalParams{
    cartId: string;
    cartTotal: number;
}

export default async function updateCartTotal({cartTotal,cartId}:UpdateCartTotalParams) {
 const updateCartTotal = await prismaClient.cart.update({
    where: {
      id: cartId,
    },
    data: {
      total: cartTotal,
    },
  });
  return updateCartTotal;
}
