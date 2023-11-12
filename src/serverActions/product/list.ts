import { prismaClient } from "@/providers/prismaClient";

export const productListAction = async (search: string | undefined) => {
    let queryArgs = {}

    const query = () => {

        if(search){
            queryArgs = {
                where:{
                    name: {
                        contains: search
                    }
                },
                include:{
                    brand: true
                }   
            }
            return queryArgs;
        }
        
        queryArgs = {
            include: {
                brand: true
            }
        }

        return queryArgs;
    }

    return await prismaClient.product.findMany(query())
};