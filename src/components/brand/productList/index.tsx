import { Product } from "@prisma/client";
import { BrandProductItemListComponent } from "./item";
import { SearchComponent } from "@/components/util/search";
import { listProductsByBrandIdListServerAction } from "@/serverActions/brand/productList";

interface BrandProductListProps {
  brandId: string;
  search: string | undefined;
}

export async function BrandProductListComponent({
  brandId,
  search,
}: BrandProductListProps) {
  const brandProductsList = await listProductsByBrandIdListServerAction(brandId, search);
  
  return (
    <div className="w-full px-[1rem] py-[3.5rem] flex flex-col gap-y-5">
      <SearchComponent searchUrl={`/brand/${brandId}?search=`} />
      {brandProductsList && brandProductsList.map((item: Product) => {
        return <BrandProductItemListComponent product={item} key={item.id} />;
      })}
    </div>
  );
}
