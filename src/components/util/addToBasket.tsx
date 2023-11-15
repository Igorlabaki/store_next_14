"use client";

import addToTheCartAction from "@/serverActions/actions/cart/addProductCartInCart";
import { ButtonComponent } from "./button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import deleteProductServerAction from "@/serverActions/actions/cart/deleteProduct";
import { ProductCartIncludeCartProduct } from "@/types";

interface AddToTheCartProps {
  userId: string;
  productId: string;
  pruductAlreadyInCart: ProductCartIncludeCartProduct | null;
}

export function AddToCartButton({ productId, userId,pruductAlreadyInCart }: AddToTheCartProps) {
  const addToCart = async () => await addToTheCartAction(userId, productId, 1);
  return (
    <ButtonComponent
      title={pruductAlreadyInCart ? "REMOVE FROM THE BASKET" : "ADD TO BASKET"}
      titleClassname="text-[0.87rem] text-white"
      icon={pruductAlreadyInCart ? <AiOutlineMinus className="text-[1.25rem] text-white" /> : <AiOutlinePlus className="text-[1.25rem] text-white" />}
      className="bg-black w-full h-[3.75rem] flex items-center px-[1rem] gap-x-[0.5rem] active:scale-95 duration-500 rounded-md"
      onClick={() =>{
        if(pruductAlreadyInCart){
          deleteProductServerAction(pruductAlreadyInCart)
        }else{
          addToCart()
        }
      }}
    />
  );
}
