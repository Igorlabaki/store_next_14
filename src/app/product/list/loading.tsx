import { SearchComponent } from '@/components/util/search'
import React from 'react'

export default function loading() {
  const itemsList: number[] = [0,1,2,3,4,5]
  return (
   <main  className="px-[1rem] py-[2rem] min-h-screen">
     <SearchComponent searchUrl="/product/list?search=" />
     <div className="flex flex-1 min-h-screen flex-col gap-y-[1rem] py-[2rem]">
        {itemsList.map((item : number) => {
            return(
                <div className="flex h-[8.375rem] gap-x-[0.75rem] bg-gray-200 animate-pulse border-[2px] rounded-md shadow-lg overflow-hidden relative" key={item} />
            )
        })}
     </div>
   </main>
  )
}
