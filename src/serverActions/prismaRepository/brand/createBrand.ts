"user server"

import { prismaClient } from "@/services/prismaClient";

export default async function createBrand(  ){
    return await prismaClient.brand.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812737/msyrenr7pdqivezwg0ja.png",name: "Tiffany & Co.",},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812735/btqaxlln8azcl0w36tak.png",name: "HUGO BOSS.",},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812735/wqbf6woxpc8rgpwlanr1.png",name: "Cartier",},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812735/wtkzzxkkzyjxnelhmoxs.png",name: "Prada",},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812735/scazmmlvluhygdtexhb2.png",name: "BURBERRY",},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699812735/fjkadsmbrthkhbbk46fo.png",name: "Gucci",}
       ],
    })
}