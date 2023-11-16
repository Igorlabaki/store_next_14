import { ProductIncludesBrand } from "@/types";
import getProductById from "@/serverActions/prismaRepository/product/getProductById";

export const productByIdServerAction  = async (productId: string) => {
    const productById  = await getProductById({productId})

    return productById;
}