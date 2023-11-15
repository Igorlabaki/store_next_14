import { Brand, Product, User, ProductCart,Cart } from "@prisma/client";

export interface ProductIncludesBrand extends Product {
    brand: Brand
}
export interface CartIncludeProductCartUser extends Cart {
   user: User,
   ProductCart: ProductCartIncludeCartProduct[]
}
export interface CartIncludeProductCart extends Cart {
   ProductCart: ProductCartIncludeCartProduct[]
}

export interface ProductCartIncludeCartProduct extends ProductCart {
    product: Product,
    cart: Cart
}

export interface UserIncudeCartProductCart extends User {
    Cart: CartIncludeProductCart;
}
