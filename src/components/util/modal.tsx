"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export interface PropsNewModal {
  onClose: () => void;
  styleExternal?: string;
  styleInternal?: string;
  children: React.ReactNode;
}

export function ModalComponent({
  onClose,
  children,
  styleExternal,
  styleInternal,
}: PropsNewModal) {
  const handleOutsideClick = (e: any) => {
    if (e.target.id != "internal_modal") {
      onClose();
    }
  };

  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    animate={{
      opacity:1
    }}
    exit={{
      width: 0,
      transition:{
        duration: 1
      }
    }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}
      aria-hidden="true"
      id={"modal-root"}
      onClick={(e) => handleOutsideClick(e)}
      className={`${
        styleExternal ? styleExternal : "bg-black/40"
      } flex justify-start items-center  w-screen  fixed top-0 right-0 z-40 max-w-[25rem] left-[50%] translate-x-[-50%] overflow-hidden`}
    >
      <motion.div
            initial={{
              width: "0%",
              x: -100
            }}
            animate={{
              width: "70%",
              x:0
            }}
            exit={{
              width: 0,
              transition:{
                duration: 1
              }
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
        id="internal_modal"
        className={twMerge(
          `z-50 flex justify-start items-start  bg-transparent  border-l-[2px] `,
          styleInternal
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
