import { SearchComponent } from "@/components/util/search";
import { ProductPageListComponent } from "@/components/product/list";

export default async function ProductPageList({searchParams}: {searchParams : {search : string | undefined}}) {
  const query = typeof searchParams?.search === 'string' ? searchParams?.search : undefined;

  return (
    <main className="px-[1rem] py-[2rem] min-h-screen">
        <SearchComponent searchUrl="/product/list?search="/>
        <ProductPageListComponent query={query} />
    </main>
  )
}
