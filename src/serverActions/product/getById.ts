import { prismaClient } from "@/providers/prismaClient";
import { ProductIncludesBrand } from "@/types";

export const productByIdAction  = async (productId: string) => {
    const productById : ProductIncludesBrand | null = await prismaClient.product.findFirst({
        where:{
            id: productId
        },
        include:{
            brand: true
        }
    })

    return productById;
}