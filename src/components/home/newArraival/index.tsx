import Link from "next/link";
import { ArrivalContentComponent } from "./content";
import { HiOutlineArrowRight } from "react-icons/hi";
import { queryClient } from "@/services/reactQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { productListByNameServerAction } from "@/serverActions/product/listByName";
import { listProductFactory } from "@/backend/useCase/product/listCase/listFactory";

export async function NewArraival() {
  await queryClient.prefetchQuery({
    queryKey: ["productList"],
    queryFn: async () => await productListByNameServerAction(undefined),
  });

  return (
    <div className="font-tenor">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArrivalContentComponent />
      </HydrationBoundary>
      <div className="flex gap-x-[0.5rem] justify-center items-center w-full mt-[2.5rem]">
        <Link
          href={"/product/list"}
          className="text-custom-gray-reg text-[1rem]"
        >
          Explore More
        </Link>
        <HiOutlineArrowRight className={"text-[1rem]"} />
      </div>
    </div>
  );
}
