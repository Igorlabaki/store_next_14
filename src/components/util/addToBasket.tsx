import { ButtonComponent } from './button';
import { AiOutlinePlus } from 'react-icons/ai';

export function AddToBasketButton() {
  return (
    <ButtonComponent 
        title='ADD TO BASKET' 
        titleClassname="text-[0.87rem] text-white" 
        icon={<AiOutlinePlus className="text-[1.25rem] text-white"/>} 
        className="bg-black w-full h-[3.75rem] flex items-center px-[1rem] gap-x-[0.5rem]" 
    />
  )
}
