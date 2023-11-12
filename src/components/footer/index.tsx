import Link from 'next/link';
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { ImageComponent } from '../util/image';

export  function FooterComponent() {
  return (
    <footer className="mt-[2rem] flex flex-col gap-y-[2rem] bg-gray-200 py-[1.4rem]">
       <Link href={"/"} className='mx-auto'>
          <ImageComponent src='/assets/images/logo.png' w={'w-[5rem]'} h={'h-[2rem]'} alt='logo'/>
        </Link>
        <div className='flex  w-[10.1rem] mx-auto text-custom-gray-reg text-[1.5rem] gap-x-[2.8rem]'>
            <AiOutlineTwitter/>
            <AiFillInstagram/>
            <AiFillYoutube/>
        </div>
        <div className="text-[1rem] leading-[1.8rem] font-tenor mx-auto w-fit text-center">
            <p>support@openui.design</p>
            <p >+60 825 876</p>
            <p>08:00 - 22:00 - Everyday</p>
        </div>
        <p className="text-center text-[0.75rem] text-custom-gray-ligth">Copyright© OpenUI All Rights Reserved.</p>
    </footer>
  )
}
