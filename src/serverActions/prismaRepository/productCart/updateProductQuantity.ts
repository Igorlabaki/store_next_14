import { prismaClient } from "@/services/prismaClient";

interface UpdateProductCartQuantityParams{
  quantity: number;
  productCartId: string;
}

export default async function updateProductCartQuantity({
  quantity,
  productCartId
}:UpdateProductCartQuantityParams) {
  const updatePorductCart = await prismaClient.productCart.update({
    where: {
      id: productCartId,
    },
    data: {
      quantity,
    },
    include: {
      cart: true,
      product: true,
    },
  });
  return updatePorductCart;
}
