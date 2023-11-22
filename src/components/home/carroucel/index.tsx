"use client";

import { ImageComponent } from "@/components/util/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CarroucelComponent() {
  const [carroucelIndex, setCarroucelIndex] = useState(0);
  const carroucelImages = [
    "/assets/images/carroucel/banner1.png",
    "/assets/images/carroucel/banner2.png",
    "/assets/images/carroucel/banner5.png",
  ];
  const translateAnimation = `-translate-x-[${carroucelIndex * 25}rem]`
  
  useEffect(() => {
   setTimeout(() => setCarroucelIndex((prev: number) => {
    if(carroucelImages.length - 1 === carroucelIndex){
      return 0
    }else{
      return prev + 1
    }
   }), 2000)
  }, [carroucelIndex])

  return (
    <div className="min-h-[37.5rem] min-w-sreen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start relative overflow-hidden">
      <div className={`flex justify-center items-center ${translateAnimation} duration-700`}>
        {carroucelImages.map((item: string) => {
          return (
            <ImageComponent
              alt="image"
              h="min-h-[37.5rem]"
              src={item}
              w="w-[25rem]"
              key={item}
            />
          );
        })}
      </div>
      <div className="absolute bottom-3 flex  space-x-2 w-full justify-center items-center">
        {carroucelImages.map((item: string, index: number) => {
          return (
            <div
              className={`h-[10px] w-[10px] border-2 border-white rotate-45 cursor-pointer flex justify-center items-center ${
                carroucelIndex === index && "bg-white rotate-180 rounded-md"
              } duration-700`}
              key={item}
              onClick={() => setCarroucelIndex(index)}
            />
          );
        })}
      </div>
      <div
        className={`font-bondoni text-black/70 font-semibold text-[2.5rem]  italic flex flex-col space-x-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <p>LUXURY</p>
        <p>FASHION</p>
        <p>&</p>
        <p>ACCESSORIES</p>
      </div>
      <Link
        href={`/product/list`}
        className={`w-[15.8rem] bg-custom-gray-reg/60 rounded-[1.8rem] h-[2.5rem] font-tenor flex justify-center items-center absolute bottom-[2.5rem]  left-1/2 transform -translate-x-1/2 `}
      >
        <p className="text-white">EXPLORE COLLECTION</p>
      </Link>
    </div>
  );
}
