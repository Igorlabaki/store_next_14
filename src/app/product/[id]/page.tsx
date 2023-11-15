import { AddToCartButton } from "@/components/util/addToBasket";
import { NotFoundComponent } from "@/components/util/notFound";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProductInfoComponent } from "@/components/product/info";
import { AuthOptions, Session, getServerSession } from "next-auth";

import { ProductCardComponent } from "@/components/product/productCard";
import { productByIdServerAction } from "@/serverActions/actions/product/getById";
import verifyIfProductCartExistServerAction from "@/serverActions/actions/productCard/verifyIfProductCartExist";
import getUserById from "@/serverActions/prismaRepository/user/getUserById";

interface ProductByIdPageProps {
  params: {
    id: string;
  };
}

export default async function ProductByIdPage({
  params,
}: ProductByIdPageProps) {
  const session: any = await getServerSession(authOptions as AuthOptions);
  const productById = await productByIdServerAction(params.id);
  const userData = await getUserById(session.user.id);

  const pruductAlreadyInCart : any = await verifyIfProductCartExistServerAction({
    productId: params.id,
    cartId: userData?.Cart?.id,
  });

  if (!productById) {
    return <NotFoundComponent />;
  }

  return (
    <main className="flex min-h-screen flex-col font-tenor w-full">
      <ProductCardComponent product={productById} />
      <AddToCartButton productId={productById.id} userId={session?.user?.id} pruductAlreadyInCart={pruductAlreadyInCart}/>
      <ProductInfoComponent />
    </main>
  );
}
