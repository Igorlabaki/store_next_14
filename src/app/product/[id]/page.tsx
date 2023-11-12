import { NotFoundComponent } from "@/components/util/notFound";
import {AddToBasketButton} from '@/components/util/addToBasket';
import { ProductInfoComponent } from "@/components/product/info";
import { productByIdAction } from "@/serverActions/product/getById";
import { ProductCardComponent } from '@/components/product/productCard';

interface ProductByIdPageProps {
    params: {
      id: string;
    };
}

export  default async  function ProductByIdPage({params}: ProductByIdPageProps) {

  const productById = await productByIdAction(params.id);

  if(!productById){
    return(
        <NotFoundComponent/>
    )
  }

  return(
        <main className="flex min-h-screen flex-col font-tenor" >
            <ProductCardComponent product={productById}/>
            <AddToBasketButton />
            <ProductInfoComponent />
        </main>
    )
}
