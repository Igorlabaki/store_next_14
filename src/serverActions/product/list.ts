"use server";

import { listProductFactory } from "@/backend/useCase/product/listCase/listFactory";
import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
  
  const listProduct = await listProductFactory().handle(search)

  return listProduct;
};
