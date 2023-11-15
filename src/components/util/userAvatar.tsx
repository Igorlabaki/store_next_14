import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";

type UserAvatarProps = {
  size: number;
  avatar: string | null | undefined;
};

export const UserAvatarComponent = ({ avatar, size }: UserAvatarProps) => {
  if (!avatar) {
    return <BiUserCircle size={size} className={"text-custom-gray-reg"} />;
  }

  return (
    <Image
      src={avatar}
      width={size}
      height={size}
      alt="user-avatar"
      className={`rounded-full`}
    />
  );
};
