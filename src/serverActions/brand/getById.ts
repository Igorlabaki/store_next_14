import { prismaClient } from "@/providers/prismaClient";

export const brandByIdAction = async (brandId: string) => {
    return await prismaClient.brand.findFirst({
        where:{
            id: brandId,
        }
    })
}