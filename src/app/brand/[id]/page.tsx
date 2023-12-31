import { NotFoundComponent } from "@/components/util/notFound";

import { BrandProductListComponent } from "@/components/brand/productList";
import { getBrandByIdFactory } from "@/backend/useCase/brand/getBrandByIdCase/getBrandByIdFactory";
import { brandListByIdServerAction } from "@/serverActions/brand/getById";

interface BrandByIdPageParams {
  params: {
    id: string;
  };
  searchParams: { search: string | undefined };
}

export default async function BrandByIdPage({
  params,
  searchParams,
}: BrandByIdPageParams) {
  const brandById = await brandListByIdServerAction(params.id)

  if (!brandById) {
    return <NotFoundComponent />;
  }

  return (
    <main className="flex min-h-screen flex-col pt-[3rem]">
      <p className="text-[1.325rem] leading-[2.5rem] tracking-[0.25rem] text-center font-bondoni font-semibold italic text-custom-gray-reg">
        {brandById.name}
      </p>
      <BrandProductListComponent
        brandId={brandById.id}
        search={searchParams.search}
      />
    </main>
  );
}
