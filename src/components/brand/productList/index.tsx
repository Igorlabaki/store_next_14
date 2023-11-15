import { Product } from "@prisma/client";
import { BrandProductItemListComponent } from "./item";
import { SearchComponent } from "@/components/util/search";
import { brandProductsListAction } from "@/serverActions/actions/brand/productList";

interface BrandProductListProps {
  brandId: string;
  query: string | undefined;
}

export async function BrandProductListComponent({
  brandId,
  query,
}: BrandProductListProps) {
  const brandProductsList = await brandProductsListAction(brandId, query);
  return (
    <div className="w-full px-[1rem] py-[3.5rem] flex flex-col gap-y-5">
      <SearchComponent searchUrl={`/brand/${brandId}?search=`} />
      {brandProductsList.map((item: Product) => {
        return <BrandProductItemListComponent product={item} key={item.id} />;
      })}
    </div>
  );
}
