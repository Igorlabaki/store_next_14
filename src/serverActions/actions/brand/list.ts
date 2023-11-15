import brandList from "@/serverActions/prismaRepository/brand/list"

export const brandListServerAction = async () => {
    const brandListResponse = await brandList()
    return brandListResponse;
}