import { Brand } from "@prisma/client";
import { BrandItemListComponent } from "./item";
import { brandListServerAction } from "@/serverActions/actions/brand/list";

export async function BrandListComponent() {
  const brandList = await brandListServerAction();

  return (
    <div className="flex flex-col gap-y-8 flex-wrap gap-x-2 justify-center items-center">
      {brandList.map((item: Brand) => (
        <BrandItemListComponent brand={item} key={item.id} />
      ))}
    </div>
  );
}
