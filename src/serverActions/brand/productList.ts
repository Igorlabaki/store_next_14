"use server"

import { listProductsByBrandIdFactory } from "@/backend/useCase/product/listByBrandIdCase/listByBrandIdFactory";

export const listProductsByBrandIdListServerAction  = async (brandId: string, search: string | undefined) => {
    const listProductsByBrandId = await listProductsByBrandIdFactory().handle({brandId,search})
    return listProductsByBrandId;
}