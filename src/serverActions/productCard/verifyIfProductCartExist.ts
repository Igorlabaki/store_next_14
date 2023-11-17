"use server"
import { IVerifyIfProductAlreadyInCratParams } from "@/backend/repository/IProductCartRepository";
import { verifyIfProductCartExistsFactory } from "@/backend/useCase/ProductCart/verifyIfProductCartExistsCase/verifyIfProductCartExistsFactory";

export default async function verifyIfProductCartExistsServerAction(params:IVerifyIfProductAlreadyInCratParams) {
  const productCartAlreadyCart = await verifyIfProductCartExistsFactory().handle(params);
  return productCartAlreadyCart;
}
