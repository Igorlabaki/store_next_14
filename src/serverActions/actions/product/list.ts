"use server";

import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
  let queryArgs = {};

  if (search && search != "All") {
    const listProductd = await prismaClient.product.findMany();

    return listProductd;
  }

  const listProductd = await prismaClient.product.findMany();

  return listProductd;
};
