"use server";

import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
  
  if (search && search.includes("All") ) {
    const listProductd = await prismaClient.product.findMany({
      take: 6
    });
    return listProductd;
  }

  const listProductd = await prismaClient.product.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    take: 6,
  });

  return listProductd;
};
