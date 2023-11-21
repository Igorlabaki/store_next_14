"use server";

import { IListProduct } from "@/backend/repository/IProductRepository";
import { listProductFactory } from "@/backend/useCase/product/listCase/listFactory";

export const productListServerAction = async (parms:IListProduct) => {
  
  const listProduct = await listProductFactory().handle(parms)

  return listProduct;
};
