"use server"
import { prismaClient } from "@/services/prismaClient";

export default async function createProduct(  ){
    const x =  await prismaClient.product.createMany({
       data:[
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712775/jy6tezx0vjmsigsujpfn.png",name: "Vest Angora", price:"150",fk_brand_id: "3b43405b-ad06-4d23-8e2c-425e1b8ba42d"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712778/utsgsyub3wnc5z9tvpoh.png",name: "Cardigan Lime", price:"150",fk_brand_id: "c3c344c7-c742-4bf7-918f-06ac68b2da36"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699712783/elorbdr5cw0qcw5qwuhz.png",name: "Leather Bag", price:"350",fk_brand_id: "0bc6e102-fb7b-4320-bc71-20c34aff3fc5"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699633875/g0s8gwjfudzzd05kkvzn.png",name: "Dress Oblongo", price:"400",fk_brand_id: "03300ba0-6e04-4d07-bec5-a25db728bf3a"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/biu1izckb026yqidpw6v.png",name: "Beige Coat", price:"100",fk_brand_id: "6fcffac8-c250-440c-bcdb-f621afd1789f"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1699706308/o2l77izslzklxkk1gaj6.png",name: "Black Coat", price:"75",fk_brand_id: "26363346-d20a-46b7-9aa1-acda15256df6"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/a9qpgt8iihwjbobyhip3.png",name: "Coat Angora", price:"150",fk_brand_id: "3b43405b-ad06-4d23-8e2c-425e1b8ba42d"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/ozcoc9uq8hdhka8kkvdv.png",name: "Coat Lime", price:"150",fk_brand_id: "c3c344c7-c742-4bf7-918f-06ac68b2da36"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/vbwibe2ormln3lrdm4be.png",name: "Coat Tran", price:"350",fk_brand_id: "0bc6e102-fb7b-4320-bc71-20c34aff3fc5"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/rpvvhhvr7pnxamrjjm07.png",name: "Coat Oblongo", price:"400",fk_brand_id: "03300ba0-6e04-4d07-bec5-a25db728bf3a"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/iv1vdnbmugasibrgrptl.png",name: "Coat  x", price:"100",fk_brand_id: "6fcffac8-c250-440c-bcdb-f621afd1789f"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700128934/hzjcrep7wd63owpje1b5.png",name: "Coat Maria", price:"75",fk_brand_id: "26363346-d20a-46b7-9aa1-acda15256df6"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/nd5uqrfojuvsepifvm1j.jpg",name: "Cardigan Oblongo", price:"400",fk_brand_id: "03300ba0-6e04-4d07-bec5-a25db728bf3a"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/ow8jgvpwbeypkrbvnogp.jpg",name: "Cardigan  x", price:"100",fk_brand_id: "6fcffac8-c250-440c-bcdb-f621afd1789f"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129461/yjnz8izi5eko5it5ry5o.jpg",name: "Cardigan Maria", price:"75",fk_brand_id: "26363346-d20a-46b7-9aa1-acda15256df6"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129462/np1o55tz3uloqea2po30.jpg",name: "Cardigan Tran", price:"75",fk_brand_id: "3b43405b-ad06-4d23-8e2c-425e1b8ba42d"},

        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129627/gs7rqvpg8qdo4zn4yyya.jpg",name: "Dress Angora", price:"150",fk_brand_id: "3b43405b-ad06-4d23-8e2c-425e1b8ba42d"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129582/cojsn5brotd8e1fzyuxs.jpg",name: "Dress Lime", price:"150",fk_brand_id: "c3c344c7-c742-4bf7-918f-06ac68b2da36"},
        {imageUrl:"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1700129571/fbdzs6un8heznajjjzwi.jpg",name: "Dress Bag", price:"350",fk_brand_id: "0bc6e102-fb7b-4320-bc71-20c34aff3fc5"},
       ],
    })
    console.log(x)
    return x
}


