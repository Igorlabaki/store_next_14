import { prismaClient } from "@/services/prismaClient";

export const brandProductsListAction  = async (brandId: string, search: string | undefined) => {

    let queryArgs = {}

    const query = () => {

        if(search){
            queryArgs = {
                where: {
                    fk_brand_id: brandId,
                    name: {
                        contains : search,
                    }
                },
                include:{
                    brand: true
                }   
            }
            return queryArgs;
        }
        
        queryArgs = {
            where: {
                fk_brand_id: brandId,
            },
            include: {
                brand: true
            }
        }
        return queryArgs;
    }

    return await prismaClient.product.findMany(query());
}