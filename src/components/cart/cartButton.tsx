"use client"
import { useRouter } from "next/navigation";
import { ButtonComponent } from '../util/button';
import { BsBag } from 'react-icons/bs';
import deleteCartServerAction from "@/serverActions/actions/cart/deleteCart";
import toast from "react-hot-toast";

interface CratButtonProps{
    userId: string;
    listLength: number;
}
export default function CartButtonComponent({listLength,userId}:CratButtonProps) {
  const {push} = useRouter()
  async function handleClick(){
    if(listLength > 0){
        await deleteCartServerAction(userId)
        toast.success("Thank you for your purchase! Your order has been successfully completed")
    }else{
        push("/product/list")
    }
  }
  return (
    <ButtonComponent
        title={listLength > 0 ? "BUY NOW"  : "CONTINUE SHOPPING"}
        icon={<BsBag size={20} />}
        className="mt-5 flex justify-center items-center gap-x-5  text-white bg-black h-[3.5rem] w-[90%] mx-auto rounded-sm text-[1rem] leading-[1.625rem]"
        onClick={handleClick}
      />
  )
}
