"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    const x =  await prismaClient.product.createMany({
       data:[
        {fk_brand_id:"1f4820a2-a805-4270-8a67-474c8562cc6a",imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150" }
       ],
    })
    console.log(x)
    return x
}
