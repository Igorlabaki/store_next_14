"use client";

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
    <div
      aria-hidden="true"
      id={"modal-root"}
      onClick={(e) => handleOutsideClick(e)}
      className={`${
        styleExternal ? styleExternal : "bg-black/40"
      } flex justify-start items-center  w-screen  fixed top-0 right-0 z-40 max-w-[26rem] left-[50%] translate-x-[-50%] overflow-y-scroll-`}
    >
      <div
        id="internal_modal"
        className={twMerge(
          `z-50 flex justify-start items-start  bg-transparent  border-l-[2px] `,
          styleInternal
        )}
      >
        {children}
      </div>
    </div>
  );
}
