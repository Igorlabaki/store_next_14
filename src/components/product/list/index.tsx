import { ProductIncludesBrand } from "@/types";
import { ProductPageListItemComponent } from "./item";
import { productListAction } from "@/serverActions/product/list";

interface ProductPageListPros{
    query: string | undefined;
}
export async function ProductPageListComponent({query}: ProductPageListPros) {
  const productList = await productListAction(query);
 
  return (
    <div className="flex flex-col gap-y-[1rem] py-[2rem]">
        {
            productList.map((item :  any) => {
                return (
                    <ProductPageListItemComponent product={item} key={item.id} />
                )
            })
        }
    </div>
  )
}
