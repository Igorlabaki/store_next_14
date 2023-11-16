"use server";

import { prismaClient } from "@/services/prismaClient";
import { ProductIncludesBrand } from "@/types";

interface GetProductByIdParams{
    productId: string;
}

export default async function getProductById({productId}:GetProductByIdParams) {
  const productById =
    await prismaClient.product.findFirst({
      where: {
        id: productId,
      },
    });

  return productById;
}
