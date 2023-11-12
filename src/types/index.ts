import { Brand, Product } from "@prisma/client";

export interface ProductIncludesBrand extends Product {
    brand: Brand
}