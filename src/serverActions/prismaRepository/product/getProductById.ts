"use server";

import { prismaClient } from "@/services/prismaClient";
import { ProductIncludesBrand } from "@/types";

interface GetProductByIdParams{
    productId: string;
}

export default async function getProductById({productId}:GetProductByIdParams) {
  const productById: ProductIncludesBrand | null =
    await prismaClient.product.findFirst({
      where: {
        id: productId,
      },
      include: {
        brand: true,
      },
    });

  return productById;
}
