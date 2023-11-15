"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    const x =  await prismaClient.product.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150",fk_brand_id: "0290b942-827f-47e2-b9d0-8c54df6fccc7"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712778/utsgsyub3wnc5z9tvpoh.png",name: "Cardigan Lime", price:"150",fk_brand_id: "1b2ffd11-6eda-456c-a92a-97ebb4d2d37b"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712783/elorbdr5cw0qcw5qwuhz.png",name: "Leather Bag", price:"350",fk_brand_id: "2d7e4e92-22e9-4493-b613-871da16fd5a0"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699633875/g0s8gwjfudzzd05kkvzn.png",name: "Dress Oblongo", price:"400",fk_brand_id: "370e9af8-2171-4451-91c9-16758e4eef34"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/biu1izckb026yqidpw6v.png",name: "Beige Coat", price:"100",fk_brand_id: "d08e5528-fef2-453b-a425-9fdcc8d26414"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/o2l77izslzklxkk1gaj6.png",name: "Black Coat", price:"75",fk_brand_id: "fa800c5b-87b6-45ef-8dd3-f7bd491f2023"},
       ],
    })
    console.log(x)
    return x
}


