import Link from "next/link";
import { ImageComponent } from "./image";
import { DividerComponent } from "./divider";
import { ProductListComponent } from "../home/product/list";

export function NotFoundComponent() {
  return (
    <main className="flex  flex-col min-h-screen font-tenor pt-[2rem]" >
        <p className="text-[1.125rem] leading-[2.5rem] tracking-[0.25rem] text-center">PAGE NOT FOUND</p>
        <ImageComponent src="/assets/images/dummy.png" alt="dummy" h="h-[3.125rem]" w="w-[3.125rem]"  containerClassname="mt-[4rem] mx-auto"/>
        <p className="text-[1.125rem] leading-[1.75rem] text-center w-[17rem] mt-[1.4rem] mx-auto">We cant find the page you looking for, it will return to the</p>
        <Link href={"/"} className="h-[2.5rem] w-[12.5rem] flex justify-center items-center bg-black text-white mx-auto mt-[4rem]">
            <p className="text-[1rem] ">HOME PAGE</p>
        </Link>
        <DividerComponent />
        <p className="text-[1.125rem] leading-[2.5rem] tracking-[0.25rem] text-center">YOU MAY ALSO LIKE</p>
        <ProductListComponent />
    </main>
  )
}
