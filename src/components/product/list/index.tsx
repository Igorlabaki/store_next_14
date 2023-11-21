import { Product } from "@prisma/client";
import { ProductPageListItemComponent } from "./item";
import EmptyListComponent from "./emptyList";
interface ProductPageListPros {
  productList: Product[];
}
export async function ProductPageListComponent({ productList }: ProductPageListPros) {

  if(productList.length === 0){
    return(
      <EmptyListComponent/>
    )
  }

  return (
    <div className="flex flex-1 min-h-screen flex-col gap-y-[1rem] py-[2rem]">
      {productList && productList.map((item: any) => {
        return <ProductPageListItemComponent product={item} key={item.id} />;
      })}
    </div>
  );
}
