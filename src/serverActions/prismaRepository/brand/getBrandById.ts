import { prismaClient } from "@/services/prismaClient";

export default async function getBrandById( brandId: string ){
    return await prismaClient.brand.findFirst({
        where:{
            id: brandId,
        }
    })
}