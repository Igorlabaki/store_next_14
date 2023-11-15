"use server"

import { prismaClient } from "@/services/prismaClient";

interface DeleteProductCartParams {
  productCartId: string;
}

export default async function deleteProductCart({
  productCartId,
}: DeleteProductCartParams) {
  const removeItem = await prismaClient.productCart.delete({
    where: {
      id: productCartId,
    },
  });

  return removeItem;
}
