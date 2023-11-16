"use client";

import { GoPlus } from "react-icons/go";
import { ImageComponent } from "../util/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { ProductCartIncludeCartProduct } from "@/types";
import addProductCartInCartServerAction from "@/serverActions/actions/cart/addProductCartInCart";
import subtractProductCartInCartServerAction from "@/serverActions/actions/cart/substractProductCartInCart";
import deleteProductServerAction from "@/serverActions/actions/cart/deleteProduct";
import { ButtonComponent } from "../util/button";

interface ItemProductCartListProps {
  userId: string;
  productCart: ProductCartIncludeCartProduct;
}

export default function ItemProductCartList({
  productCart,
  userId,
}: ItemProductCartListProps) {
  const addProduct = async () => {
    await addProductCartInCartServerAction(
      userId,
      productCart.product.id,
      productCart.quantity + 1
    );
  };

  const minusProduct = async () => {
    await subtractProductCartInCartServerAction(
      userId,
      productCart.product.id,
      productCart.quantity - 1
    );
  };

  return (
    <div
      key={productCart.id}
      className="flex justify-start items-start gap-x-[0.5rem] relative w-full"
    >
      <ImageComponent
        src={productCart.product.imageUrl}
        alt={productCart.product.name}
        h="h-[8.33rem]"
        w="w-[6.25rem]"
      />
        <ButtonComponent
          className="absolute top-2 right-2 text-red-300 hover:scale-105 active:scale-95  h-6 w-6 rounded-full flex justify-center items-center"
          icon={<FaRegTrashAlt />}
          onClick={() => deleteProductServerAction(productCart)}
        />
      <div className="flex flex-col relative gap-y-[1rem] h-[8.33rem]">
        <p className="text-[0.875rem] tracking-[0.125rem] leading-[1.25rem]">
          {productCart.product.name}
        </p>
        <div className="flex flex-col flex-1 justify-between items-start py-[1rem]">
          <div className="flex gap-x-[1rem] justify-center items-center">
            <HiOutlineMinusSmall
              className={"text-[1rem] cursor-pointer"}
              onClick={() => {
                if (productCart.quantity === 1) {
                  deleteProductServerAction(productCart);
                } else {
                  minusProduct();
                }
              }}
            />
            <p className={"text-[1rem]"}>{productCart.quantity}</p>
            <GoPlus
              className={"text-[1rem] cursor-pointer"}
              onClick={() => addProduct()}
            />
          </div>
          <p className="text-[1rem] text-custom-orange">
            ${parseInt(productCart.product.price) * productCart.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
