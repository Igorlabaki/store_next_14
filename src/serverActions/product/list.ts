"use server";

import { listProductFactory } from "@/backend/useCase/product/listCase/listFactory";
import { revalidatePath } from "next/cache";

export const productListServerAction = async (search: string | undefined) => {
  
  const listProduct = await listProductFactory().handle(search)

  revalidatePath("/product/list")

  return listProduct;
};
