import {BsBag} from 'react-icons/bs';
import {RiSearchLine} from 'react-icons/ri';
import { ImageComponent } from '../util/image';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import Link from 'next/link';

export  function HeaderComponent() {
  return (
    <header className='w-full h-[3.75rem] pt-[1.1rem] px-[1rem] flex justify-between items-center'>
        <HiOutlineMenuAlt1 size={24}/>
        <Link href={"/"}>
          <ImageComponent src='/assets/images/logo.png' w={'w-[5rem]'} h={'h-[2rem]'} alt='logo'/>
        </Link>
        <BsBag size={24}/>
    </header>
  )
}
