import Link from "next/link";

export async function CarroucelComponent() {
  return (
    <div className="bg-main-banner min-h-[37.5rem] min-w-sreen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative">
      <div
        className={`font-bondoni text-custom-gray-reg font-semibold text-[2.5rem]  italic flex flex-col space-x-4`}
      >
        <p>LUXURY</p>
        <p>FASHION</p>
        <p>& ACCESSORIES</p>
      </div>
      <Link
        href={`/product/list`}
        className={`w-[15.8rem] bg-custom-gray-reg/60 rounded-[1.8rem] h-[2.5rem] font-tenor flex justify-center items-center absolute bottom-[2.5rem]`}
      >
        <p className="text-white">EXPLORE COLLECTION</p>
      </Link>
    </div>
  );
}
