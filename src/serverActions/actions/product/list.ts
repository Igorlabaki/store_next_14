"use server"

import { prismaClient } from "@/services/prismaClient";

export const productListServerAction = async (search: string | undefined) => {
    let queryArgs = {}
    const query = () => {

        if(search && search != "All"){
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
    
    const listProductd = await prismaClient.product.findMany(query())

    return listProductd
};