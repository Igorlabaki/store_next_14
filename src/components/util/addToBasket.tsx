"use client";

import addToTheCartAction from "@/serverActions/cart/addProductCartInCart";
import { ButtonComponent } from "./button";
import { FiCommand } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import deleteProductServerAction from "@/serverActions/cart/removeProduct";
import { ProductCartIncludeCartProduct } from "@/types";
import {useRouter} from "next/navigation"
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Oval     } from 'react-loading-icons'

interface AddToTheCartProps {
  userId: string;
  productId: string;
  pruductAlreadyInCart: ProductCartIncludeCartProduct | null;
  className?: string
}

export function AddToCartButton({ productId, userId,pruductAlreadyInCart,className }: AddToTheCartProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const addToCart = async () => await addToTheCartAction(userId, productId, 1);
  const { replace } = useRouter()

  async function handleButtonClick(){
    console.log(userId)
    if(!userId){
      replace("/auth")
    }else{
      setIsLoading(true)
      if(pruductAlreadyInCart){
        await deleteProductServerAction(pruductAlreadyInCart.id)
        setIsLoading(false)
        toast.success("Item removed successfully!")
      }else{
        await addToCart()
        setIsLoading(false)
        toast.success("Item added successfully!")
      }
    }
  }

  useEffect(() => {
  }, [isLoading])
  
  if(isLoading){
    return(
      <ButtonComponent
      title={pruductAlreadyInCart ? "REMOVING FROM BASKET" : "ADDING TO BASKET"}
      disabled={true}
      titleClassname="text-[0.87rem] text-white"
      icon={<Oval    width={20} height={20}/>}
      className={twMerge(`bg-black w-full  flex items-center px-[1rem] gap-x-[0.5rem] active:scale-95 duration-500`, className)}
    />
    )
  }

  return (
    <ButtonComponent
      title={pruductAlreadyInCart && userId ? "REMOVE FROM BASKET" : "ADD TO BASKET"}
      titleClassname="text-[0.87rem] text-white"
      icon={pruductAlreadyInCart ? <AiOutlineMinus className="text-[1.25rem] text-white" /> : <AiOutlinePlus className="text-[1.25rem] text-white" />}
      className={twMerge(`bg-black w-full  flex items-center px-[1rem] gap-x-[0.5rem] active:scale-95 duration-500`, className)}
      onClick={handleButtonClick}
    />
  );
}
