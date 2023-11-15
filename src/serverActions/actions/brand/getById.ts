import getBrandById from "@/serverActions/prismaRepository/brand/getBrandById"

export const brandByIdServerAction = async (brandId: string) => {
    const brandById =  getBrandById(brandId)
    return brandById
}