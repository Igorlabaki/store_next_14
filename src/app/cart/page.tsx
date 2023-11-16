
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AuthOptions, getServerSession } from "next-auth";
import ListProductsCartComponent from "@/components/cart/listProductsCart";
import { DividerComponent } from "@/components/util/divider";
import getCartByUserId from "@/serverActions/actions/cart/getCartById";
import CartButtonComponent from "@/components/cart/cartButton";

export default async function CartPage() {
  const session: any = await getServerSession(authOptions as AuthOptions);
  const useCart: any = await getCartByUserId(session?.user.id);

  return (
    <main className="flex min-h-screen flex-col font-tenor">
      <h1 className="text-[1.125rem] tracking-[0.25rem] leading-[2.5rem] mt-[2.5rem] text-center">
        CHEKOUT
      </h1>
      <div className="px-[1rem] mt-[2rem] flex flex-col justify-start items-start gap-y-[2rem] h-full w-full">
        <ListProductsCartComponent userCartProductList={useCart?.ProductCart} />
        <DividerComponent />
        <div className="flex w-full justify-between items-center">
          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0.125rem]">
            Total
          </p>
          <p className="text-[1rem] leading-[2.15rem] tracking-[0.185rem] text-custom-orange">
            ${useCart?.total}
          </p>
        </div>
      </div>
      <CartButtonComponent listLength={useCart?.ProductCart?.length} userId={useCart?.userId}/>
    </main>
  );
}
