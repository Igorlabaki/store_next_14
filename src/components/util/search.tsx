'use client'

import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

interface SearchProductProps{
  searchUrl: string;
}

export  function SearchComponent({searchUrl}:SearchProductProps) {
  const { push } = useRouter();
  const [text, setText] = useState<string>('')
  const [query] = useDebounce(text,400)

  useEffect(() => {
   push( searchUrl + query)
  }, [push,query,searchUrl])
  
  return (
    <div className="flex gap-x-3">
        <RiSearchLine size={26} className="text-custom-gray-reg"/>
        <input type="text" placeholder="What are you looking for ?" className="border-b-[0.06rem] border-gray-300 outline-none flex-1" onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}
