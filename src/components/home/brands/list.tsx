import { Brand } from "@prisma/client";
import { BrandItemListComponent } from "./item";
import { brandListAction } from "@/serverActions/brand/list";

export async function BrandListComponent() {

  const brandList = await brandListAction();
  
  return (
    <div className="h-[8.25rem] flex flex-wrap gap-x-2 justify-center items-center">
          {
            brandList.map((item: Brand) => (
              <BrandItemListComponent brand={item} key={item.id}/>
            ))
          }
    </div>
  )
}
