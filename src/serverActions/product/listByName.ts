"use server";

import { listByNameProductFactory } from "@/backend/useCase/product/listByNameCase/listFactory";

export const productListByNameServerAction = async (search: string | undefined) => {
  
  const listProduct = await listByNameProductFactory().handle(search)

  return listProduct;
};
