"use server"

import { getProductByIdFactory } from "@/backend/useCase/product/getByIdCase/getByIdFactory";

export const productByIdServerAction  = async (productId: string) => {
    const productById  = await getProductByIdFactory().handle(productId)

    return productById;
}