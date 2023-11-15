"use server";

import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
  let queryArgs = {};

  if (search && search != "All") {
    const listProductd = await prismaClient.product.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      include: {
        brand: true,
      },
      take: 6,
    });

    return listProductd;
  }

  const listProductd = await prismaClient.product.findMany({
    take: 6
  });

  return listProductd;
};
