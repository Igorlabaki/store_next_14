import ItemProductCartList from "./itemCart";
import { ProductCartIncludeCartProduct } from "@/types";

interface ListProductsCartProps {
  userCartProductList: ProductCartIncludeCartProduct[] | undefined;
}

export default function ListProductsCartComponent({
  userCartProductList,
}: ListProductsCartProps) {
  if (userCartProductList && userCartProductList.length > 0) {
    return (
      <div className="flex-1 flex flex-col justify-start items-start gap-y-4 w-full">
        { userCartProductList.map((item: ProductCartIncludeCartProduct) => {
          return <ItemProductCartList productCart={item} userId={item?.cart?.userId} key={item.id} />;
        })}
      </div>
    );
  }

  return (
    <div className="text-custom-gray-ligth flex-1 justify-center text-center w-full">
      You have no items in your Shopping Bag.
    </div>
  );
}
