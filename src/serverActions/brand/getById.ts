"use server"

import { getBrandByIdFactory } from "@/backend/useCase/brand/getBrandByIdCase/getBrandByIdFactory"

export const brandListByIdServerAction = async (brandId: string) => {
    const brandById = await getBrandByIdFactory().handle(brandId)
    return brandById
}