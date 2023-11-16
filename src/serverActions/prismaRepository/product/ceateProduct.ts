"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    const x =  await prismaClient.product.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150",fk_brand_id: "147d8c52-f921-4d61-8ca8-345516748b37"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712778/utsgsyub3wnc5z9tvpoh.png",name: "Cardigan Lime", price:"150",fk_brand_id: "9e21ce9e-631e-4fcd-b509-f55eb3734a85"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712783/elorbdr5cw0qcw5qwuhz.png",name: "Leather Bag", price:"350",fk_brand_id: "9078d686-fb8f-4b1f-b144-44a84d39dff8"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699633875/g0s8gwjfudzzd05kkvzn.png",name: "Dress Oblongo", price:"400",fk_brand_id: "a11e2168-c9ee-479d-ad53-75e1ec9bbd00"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/biu1izckb026yqidpw6v.png",name: "Beige Coat", price:"100",fk_brand_id: "027a362e-7ffe-4f87-a281-d5a53c752a64"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/o2l77izslzklxkk1gaj6.png",name: "Black Coat", price:"75",fk_brand_id: "3ec1a9e5-ff94-429f-bcb9-e70fd25bf945"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/a9qpgt8iihwjbobyhip3.png",name: "Coat Angora", price:"150",fk_brand_id: "147d8c52-f921-4d61-8ca8-345516748b37"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/ozcoc9uq8hdhka8kkvdv.png",name: "Coat Lime", price:"150",fk_brand_id: "9e21ce9e-631e-4fcd-b509-f55eb3734a85"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/vbwibe2ormln3lrdm4be.png",name: "Coat Tran", price:"350",fk_brand_id: "9078d686-fb8f-4b1f-b144-44a84d39dff8"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/rpvvhhvr7pnxamrjjm07.png",name: "Coat Oblongo", price:"400",fk_brand_id: "a11e2168-c9ee-479d-ad53-75e1ec9bbd00"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/iv1vdnbmugasibrgrptl.png",name: "Coat  x", price:"100",fk_brand_id: "de15d2ef-6bdb-459b-9f07-7d7b3cf54613"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/hzjcrep7wd63owpje1b5.png",name: "Coat Maria", price:"75",fk_brand_id: "3ec1a9e5-ff94-429f-bcb9-e70fd25bf945"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/nd5uqrfojuvsepifvm1j.jpg",name: "Cardigan Oblongo", price:"400",fk_brand_id: "a11e2168-c9ee-479d-ad53-75e1ec9bbd00"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/ow8jgvpwbeypkrbvnogp.jpg",name: "Cardigan  x", price:"100",fk_brand_id: "de15d2ef-6bdb-459b-9f07-7d7b3cf54613"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129461/yjnz8izi5eko5it5ry5o.jpg",name: "Cardigan Maria", price:"75",fk_brand_id: "3ec1a9e5-ff94-429f-bcb9-e70fd25bf945"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/np1o55tz3uloqea2po30.jpg",name: "Cardigan Tran", price:"75",fk_brand_id: "147d8c52-f921-4d61-8ca8-345516748b37"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129627/gs7rqvpg8qdo4zn4yyya.jpg",name: "Dress Angora", price:"150",fk_brand_id: "147d8c52-f921-4d61-8ca8-345516748b37"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129582/cojsn5brotd8e1fzyuxs.jpg",name: "Dress Lime", price:"150",fk_brand_id: "9e21ce9e-631e-4fcd-b509-f55eb3734a85"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129571/fbdzs6un8heznajjjzwi.jpg",name: "Dress Bag", price:"350",fk_brand_id: "9078d686-fb8f-4b1f-b144-44a84d39dff8"},
       ],
    })
    console.log(x)
    return x
}


