import { prismaClient } from "@/providers/prismaClient"

export const brandListAction = async () => {
    return prismaClient.brand.findMany()
}