"use server"

import { getListBrandFactory } from "@/backend/useCase/brand/listCase/listFactory";

export const brandListServerAction = async () => {
    const brandListResponse = await getListBrandFactory().handle()
    return brandListResponse;
}