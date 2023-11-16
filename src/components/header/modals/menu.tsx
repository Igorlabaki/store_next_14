"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Brand } from "@prisma/client";
import { signOut } from "next-auth/react";
import { GoSignOut } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsBag, BsTelephone } from "react-icons/bs";
import { ModalComponent } from "@/components/util/modal";
import { ButtonComponent } from "@/components/util/button";
import useUserQuery from "@/hooks/reactQuery/useUserQuery";
import { DividerComponent } from "@/components/util/divider";
import { UserAvatarComponent } from "@/components/util/userAvatar";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

interface MenuModalProps {
  brandList: Brand[];
}

export function MenuModalComponent({ brandList }: MenuModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { replace } = useRouter();
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const { userData, refetchUser } = useUserQuery();

  return (
    <>
      <ButtonComponent
        icon={<HiOutlineMenuAlt1 size={24} />}
        onClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && (
        <ModalComponent onClose={handleCloseModal}>
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1000,
              ease: "easeIn",
            }}
            className="bg-white flex-1 w-[16rem] min-h-screen h-full py-[3rem] px-[1.20rem] font-tenor flex  flex-col"
          >
            <ButtonComponent
              icon={<TfiClose size={15} />}
              onClick={() => setModalIsOpen(false)}
              className="absolute top-2 left-2 text-custom-orange"
            />
            <div className="flex flex-col gap-y-4 justify-center items-center gap-x-4">
              <UserAvatarComponent avatar={userData?.image} size={90} />
              <p className={`${userData ? "flex" : "hidden"} text-sm`}>
                Bem vindo, {userData?.name}
              </p>
            </div>
            <div className="flex flex-col py-3 justify-start items-start mt-4 gap-y-3">
              <Link
                href={"/cart"}
                className="flex justify-start items-center gap-x-[1rem] text-[1rem] leading-[2.1rem] text-custom-gray-reg "
              >
                <BsBag size={20} />
                <p>Cart</p>
              </Link>
              <ButtonComponent
                className="flex justify-start items-center gap-x-[1rem] text-[1rem] leading-[2.1rem] text-custom-gray-reg"
                title={userData ? "Sign Out" : "Sign In"}
                icon={<GoSignOut size={20} />}
                onClick={() => {
                  if (userData?.id) {
                   signOut();
                  } else {
                    replace("/auth");
                  }
                }}
              />
            </div>
            <DividerComponent />
            <div className="flex flex-col gap-y-2">
              {brandList?.map((item: Brand) => {
                return (
                  <Link
                    href={`/brand/${item.id}`}
                    key={item.id}
                    className="cursor-pointer hover:underline"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <DividerComponent />
            <div className="w-full flex flex-col gap-y-[5rem]">
              <div className="flex justify-start items-center gap-x-[1rem] text-[1rem] leading-[2.1rem] text-custom-gray-reg">
                <BsTelephone size={20} />
                <p>( 786 ) 713 - 8616</p>
              </div>
              <div className="flex  w-[10.1rem] mx-auto text-custom-gray-reg text-[1.5rem] gap-x-[2.8rem] ">
                <AiOutlineTwitter />
                <AiFillInstagram />
                <AiFillYoutube />
              </div>
            </div>
          </motion.div>
        </ModalComponent>
      )}
    </>
  );
}
