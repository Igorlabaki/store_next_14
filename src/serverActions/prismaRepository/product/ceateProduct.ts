"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    const x =  await prismaClient.product.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150",fk_brand_id: "4148e50e-e25f-4751-b130-e18af96a488f"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712778/utsgsyub3wnc5z9tvpoh.png",name: "Cardigan Lime", price:"150",fk_brand_id: "48d78494-c601-4626-83b1-b84af9876906"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712783/elorbdr5cw0qcw5qwuhz.png",name: "Leather Bag", price:"350",fk_brand_id: "64745a14-1aed-4645-8886-5e7584274474"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699633875/g0s8gwjfudzzd05kkvzn.png",name: "Dress Oblongo", price:"400",fk_brand_id: "7e99f0d2-d354-4f70-8728-340a3cb12c0c"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/biu1izckb026yqidpw6v.png",name: "Beige Coat", price:"100",fk_brand_id: "c5b5ce16-616d-486c-a01f-5ff06e8058e5"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/o2l77izslzklxkk1gaj6.png",name: "Black Coat", price:"75",fk_brand_id: "fa800c5b-87b6-45ef-8dd3-f7bd491f2023"},
       ],
    })
    console.log(x)
    return x
}


