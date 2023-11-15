import { prismaClient } from "@/services/prismaClient";

interface CreateProductCartParams{
    cartId: string;
    productId:string;
    quantity: number;
}

export default async function createProductCart({cartId,productId,quantity}: CreateProductCartParams) {
    const createProductCart = await prismaClient.productCart.create({
        data: {
          fk_id_product: productId,
          fk_id_cart: cartId,
          quantity,
        },
        include: {
          cart: true,
          product: true,
        },
    });
    return createProductCart
}
