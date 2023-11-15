"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    return await prismaClient.product.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150",fk_brand_id: "1f4820a2-a805-4270-8a67-474c8562cc6a"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712778/utsgsyub3wnc5z9tvpoh.png",name: "Cardigan Lime", price:"150",fk_brand_id: "46ce7fae-171b-4241-8886-415f918d358c"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712783/elorbdr5cw0qcw5qwuhz.png",name: "Leather Bag", price:"350",fk_brand_id: "58c998c2-5c3c-4a26-9824-0e467d4e1712"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699633875/g0s8gwjfudzzd05kkvzn.png",name: "Dress Oblongo", price:"400",fk_brand_id: "8f02d9a8-4e65-4696-849a-453be23d5a17"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/biu1izckb026yqidpw6v.png",name: "Beige Coat", price:"100",fk_brand_id: "d7a6dd8e-8f6a-423b-9c03-1547713de43a"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/o2l77izslzklxkk1gaj6.png",name: "Black Coat", price:"75",fk_brand_id: "f0fd9d7e-4806-4bc1-a043-a4aea086595e"},
       ],
    })
}


