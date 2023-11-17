import { Product } from '@prisma/client';

export interface ICreateProductParams {
    name: string;
    price: string;
    brandId: string; 
    imageUrl: string;
}

export interface IUpdateProductParams {
    id: string;
    name?: string;
    price?: string;
    imageUrl?: string;
}

export interface IListByBrandId {
   brandId: string;
   search?: string;
}

export interface IProductRepository {
  list: (search?:string) => Promise<Product[] | null>;
  listByBrandId: (params :IListByBrandId) => Promise<Product[] | null>;
  delete: (reference: string) => Promise<Product | null>;
  getById: (reference: string) => Promise<Product | null>;
  getByName: (reference: string) => Promise<Product | null>;
  create: (reference: ICreateProductParams) => Promise<Product | null>;
  update: (reference: IUpdateProductParams) => Promise<Product | null>;
}
