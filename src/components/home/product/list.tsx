import { Product } from "@prisma/client";
import { ProductItemComponent } from "./item";
import { productListAction } from "@/serverActions/product/list";

export async  function ProductListComponent() {
  const productList = await productListAction(undefined);

  return (
    <div className="mt-[2rem] px-[1rem] grid grid-cols-2 gap-x-[0.8rem] gap-y-[1rem]">
      {
        productList.map((item: Product) => (
          <ProductItemComponent product={item} key={item.id}/>
        ))
      }
    </div>
  )
}
