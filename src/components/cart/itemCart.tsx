"use client";

import { GoPlus } from "react-icons/go";
import { ImageComponent } from "../util/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { ProductCartIncludeCartProduct } from "@/types";
import addProductCartInCartServerAction from "@/serverActions/cart/addProductCartInCart";
import subtractProductCartInCartServerAction from "@/serverActions/cart/substractProductCartInCart";
import removeProductFromCartServerAction from "@/serverActions/cart/removeProduct";
import { ButtonComponent } from "../util/button";
import { useOptimistic, useState } from "react";
import { Oval     } from 'react-loading-icons'

interface ItemProductCartListProps {
  userId: string;
  productCart: ProductCartIncludeCartProduct;
}

export default function ItemProductCartList({
  productCart,
  userId,
}: ItemProductCartListProps) {
  const [removeProductIsLoading, setRemoveProductIsLoading] = useState(false)

  const [optimistickQuantity, addOptimisticQuantity] = useOptimistic(
    productCart.quantity,
    (state, amount) => {
      return state + Number(amount)
    }
  )

  const [optimistickTotalCart, addOptimisticTotalCart] = useOptimistic(
    productCart.cart.total,
    (state, amount) => {
      return state + Number(amount)
    }
  )

  const addProduct = async (amount: number) => {
    addOptimisticQuantity(amount);
    await addProductCartInCartServerAction(
      userId,
      productCart.product.id,
      optimistickQuantity + amount
    );
  };

  const minusProduct = async (amount: number) => {
    addOptimisticQuantity(amount);
    await subtractProductCartInCartServerAction(
      productCart.id,
    );
  };

  return (
    <div
      key={productCart.id}
      className="flex justify-start items-start gap-x-[0.5rem] w-full border-[2px] rounded-md shadow-lg overflow-hidden relative"
    >
      <div className={`${removeProductIsLoading ? "flex" : "hidden"} z-20 bg-black/70 animate-pulse absolute h-full w-full flex justify-center items-center gap-x-2`} >
        <Oval width={20} height={20}/>
        <p className="text-white">Removing</p>
      </div>
      <ImageComponent
        src={productCart.product.imageUrl}
        alt={productCart.product.name}
        h="h-[8.33rem]"
        w="w-[6.25rem]"
      />
        <ButtonComponent
          className="absolute top-2 right-2 text-red-300 hover:scale-105 active:scale-95  h-6 w-6 rounded-full flex justify-center items-center"
          icon={<FaRegTrashAlt />}
          onClick={async () => {
            setRemoveProductIsLoading(true)
            await removeProductFromCartServerAction(productCart.id)
            setRemoveProductIsLoading(false)
          }}
        />
      <div className="flex flex-col relative gap-y-[1rem] h-[8.33rem] py-1">
        <p className="text-[0.875rem] tracking-[0.125rem] leading-[1.25rem]">
          {productCart.product.name}
        </p>
        <div className="flex flex-col flex-1 justify-between items-start py-[1rem]">
          <div className="flex gap-x-[1rem] justify-center items-center">
            <HiOutlineMinusSmall
              className={"text-[1rem] cursor-pointer"}
              onClick={async () => {
                if (productCart.quantity === 1) {
                  setRemoveProductIsLoading(true)
                  await removeProductFromCartServerAction(productCart.id);
                  setRemoveProductIsLoading(false)
                } else {
                  await minusProduct(-1);
                }
              }}
            />
            <p className={"text-[1rem]"}>{optimistickQuantity}</p>
            <GoPlus
              className={"text-[1rem] cursor-pointer hover:text-[1.1rem] active:text-[0.9rem] duration-300"}
              onClick={async () => {
                await addProduct(+1)
              }}
            />
          </div>
          <p className="text-[1rem] text-custom-orange">
            ${parseInt(productCart?.product.price) * optimistickQuantity}
          </p>
        </div>
      </div>
    </div>
  );
}
