import { SearchComponent } from "@/components/util/search";
import { ProductPageListComponent } from "@/components/product/list";
import { PaginationComponent } from "@/components/product/list/pagination";
import { productListServerAction } from "@/serverActions/product/list";
import { IListProductReturn } from "@/backend/repository/IProductRepository";

export default async function ProductPageList({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const search =
    typeof searchParams?.search === "string" ? searchParams?.search : undefined;
  
  const page = searchParams['page'] ?? 1;
  const per_page = searchParams['per_page'] ?? 5;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const productList : any = await productListServerAction({search, skip: start, take: end});

  return (
    <main className="px-[1rem] py-[2rem] min-h-screen">
      <SearchComponent searchUrl="/product/list?search=" />
      <ProductPageListComponent productList={productList?.products} />
      <PaginationComponent listLength={productList?.listLength} page={Number(page)} per_page={Number(per_page)} search={search}/>
    </main>
  );
}
