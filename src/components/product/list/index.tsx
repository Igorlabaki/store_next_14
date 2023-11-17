import { ProductPageListItemComponent } from "./item";
import { productListServerAction } from "@/serverActions/product/list";

interface ProductPageListPros {
  query: string | undefined;
}
export async function ProductPageListComponent({ query }: ProductPageListPros) {
  const productList = await productListServerAction(query);

  return (
    <div className="flex flex-col gap-y-[1rem] py-[2rem]">
      {productList && productList.map((item: any) => {
        return <ProductPageListItemComponent product={item} key={item.id} />;
      })}
    </div>
  );
}
