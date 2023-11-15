import validateIfProductAlredyInCart from "@/serverActions/prismaRepository/productCart/validateIfProductAlredyInCart";

interface VerifyIfProductCartExistServerActionParams {
  cartId: string | undefined;
  productId: string;
}

export default async function verifyIfProductCartExistsServerAction({cartId,productId}:VerifyIfProductCartExistServerActionParams) {
  const productCartAlreadyCart = await validateIfProductAlredyInCart({
    cartId,
    productId,
  });
  return productCartAlreadyCart;
}
