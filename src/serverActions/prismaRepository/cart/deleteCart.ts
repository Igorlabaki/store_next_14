import { prismaClient } from "@/services/prismaClient";

export default async function deleteCart(userId: string) {
    const deleteCart = await prismaClient.cart.delete({
        where:{
            userId,
        }
    })
    return deleteCart;
}
