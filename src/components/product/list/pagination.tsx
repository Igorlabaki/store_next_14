
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  page: number;
  per_page: number;
  search: string | undefined;
  listLength: number | undefined;
}

export function PaginationComponent({ listLength,page,per_page,search }: PaginationProps) {

  const pages_number = listLength && Math.ceil(listLength / Number(per_page));

  if (listLength === 0) {
    return null;
  }

  return (
    <div className="flex mx-auto w-fit  justify-center items-center gap-x-5 relative">
      <Link
        className={`${page == 1 ? "hidden" : "flex"} absolute -left-5`}
        href={`/product/list?search=${search}&page=${
          Number(page) - 1
        }&per_page=${per_page}`}
      >
        {<IoIosArrowBack />}
      </Link>
      <div className="flex gap-x-1 justify-center items-center">
        <p className="text-[15px]">{page}</p>
        <p className="text-[15px]">/</p>
        <p className="text-[12px]">{listLength && pages_number}</p>
      </div>
      <Link
        className={`${
          page == pages_number ? "hidden" : "flex"
        } absolute -right-5`}
        href={`/product/list?search=${search}&page=${
          Number(page) + 1
        }&per_page=${per_page}`}
      >
        <IoIosArrowForward size={15} />
      </Link>
    </div>
  );
}
