import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { ImageComponent } from "../util/image";
import { MenuModalComponent } from "./modals/menu";
import getUserServerAction from "@/serverActions/actions/user/getUserAction";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { brandListServerAction } from "@/serverActions/actions/brand/list";

export async function HeaderComponent() {
  const session: any = await getServerSession(authOptions as AuthOptions);
  const userData = await getUserServerAction(session?.user.id);
  const brandList = await brandListServerAction();

  return (
    <header className="w-full h-[3.75rem] pt-[1.1rem] px-[1rem] flex justify-between items-center">
      <MenuModalComponent brandList={brandList} />
      <Link href={"/"}>
        <ImageComponent
          src="/assets/images/logo.png"
          w={"w-[5rem]"}
          h={"h-[2rem]"}
          alt="logo"
        />
      </Link>
      {userData && (
        <Link href={"/cart"} className="relative">
          {userData.Cart && userData.Cart?.ProductCart.length > 0 && (
            <div className="bg-pink-500 flex justify-center items-center rounded-full h-5 w-5 text-white absolute -top-5 -right-3 text-sm">
              {userData.Cart?.ProductCart?.length}
            </div>
          )}
          <BsBag size={24} />
        </Link>
      )}
    </header>
  );
}
