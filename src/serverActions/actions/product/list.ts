"use server";

import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
  let queryArgs = {};

  if (search && search != "All") {
    queryArgs = {
      where: {
        name: {
          contains: search,
        },
      },
      include: {
        brand: true,
      },
      take: 6,
    };
    const listProductd = await prismaClient.product.findMany(queryArgs);

    return listProductd;
  }

  queryArgs = {
    include: {
      brand: true,
    },
    take: 6
  };

  const listProductd = await prismaClient.product.findMany(queryArgs);

  return listProductd;
};
