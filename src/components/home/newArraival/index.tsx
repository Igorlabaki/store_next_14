
import Link from "next/link";
import { ArrivalHeaderComponent } from './header';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { ProductListComponent } from "../product/list";

export  function NewArraival() {
  return (
    <div className="font-tenor">
        <ArrivalHeaderComponent />
        <ProductListComponent />
        <div className="flex gap-x-[0.5rem] justify-center items-center w-full mt-[2.5rem]">
          <Link href={'/product/list'} className="text-custom-gray-reg text-[1rem]">Explore More</Link>
          <HiOutlineArrowRight className={"text-[1rem]"}/>
        </div>
    </div>
  )
}
