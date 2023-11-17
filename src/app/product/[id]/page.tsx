import { AddToCartButton } from "@/components/util/addToBasket";
import { NotFoundComponent } from "@/components/util/notFound";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProductInfoComponent } from "@/components/product/info";
import { AuthOptions, Session, getServerSession } from "next-auth";

import { ProductCardComponent } from "@/components/product/productCard";
import verifyIfProductCartExistServerAction from "@/serverActions/productCard/verifyIfProductCartExist";
import { getUserByIdFactory } from "@/backend/useCase/user/getUserByIdCase/getUserByIdFactory";
import { getProductByIdFactory } from "@/backend/useCase/product/getByIdCase/getByIdFactory";

interface ProductByIdPageProps {
  params: {
    id: string;
  };
}

export default async function ProductByIdPage({
  params,
}: ProductByIdPageProps) {
  const session: any = await getServerSession(authOptions as AuthOptions);
  const productById = await getProductByIdFactory().handle(params?.id);
  const userData = await getUserByIdFactory().handle(session?.user?.id);

  const pruductAlreadyInCart : any = await verifyIfProductCartExistServerAction({
    productId: params.id,
    cartId: userData?.Cart?.id as string,
  });

  if (!productById) {
    return <NotFoundComponent />;
  }

  return (
    <main className="flex min-h-screen flex-col font-tenor w-full">
      <ProductCardComponent product={productById} />
      <AddToCartButton productId={productById.id} userId={session?.user?.id} pruductAlreadyInCart={pruductAlreadyInCart} className="h-[3.8rem] rounded-none"/>
      <ProductInfoComponent />
    </main>
  );
}
