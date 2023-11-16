"use client";

import addToTheCartAction from "@/serverActions/actions/cart/addProductCartInCart";
import { ButtonComponent } from "./button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import deleteProductServerAction from "@/serverActions/actions/cart/deleteProduct";
import { ProductCartIncludeCartProduct } from "@/types";
import {useRouter} from "next/navigation"
import { twMerge } from "tailwind-merge";
interface AddToTheCartProps {
  userId: string;
  productId: string;
  pruductAlreadyInCart: ProductCartIncludeCartProduct | null;
  className?: string
}

export function AddToCartButton({ productId, userId,pruductAlreadyInCart,className }: AddToTheCartProps) {
  const addToCart = async () => await addToTheCartAction(userId, productId, 1);
  const {replace} = useRouter()
  return (
    <ButtonComponent
      title={pruductAlreadyInCart ? "REMOVE FROM THE BASKET" : "ADD TO BASKET"}
      titleClassname="text-[0.87rem] text-white"
      icon={pruductAlreadyInCart ? <AiOutlineMinus className="text-[1.25rem] text-white" /> : <AiOutlinePlus className="text-[1.25rem] text-white" />}
      className={twMerge(`bg-black w-full  flex items-center px-[1rem] gap-x-[0.5rem] active:scale-95 duration-500 rounded-md`, className)}
      onClick={() =>{
        if(!userId){
          replace("/auth")
        }else{
          if(pruductAlreadyInCart){
            deleteProductServerAction(pruductAlreadyInCart)
          }else{
            addToCart()
          }
        }
      }}
    />
  );
}
