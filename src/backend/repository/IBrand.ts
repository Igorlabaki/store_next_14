import { Brand } from '@prisma/client';

export interface ICreateBrandParams {
  name: string;
  imageUrl: string;
}

export interface IUpdateBrandParams {
  id: string;
  name: string;
  imageUrl: string;
}

export interface IBrandRepository {
  list: () => Promise<Brand[] | null>;
  delete: (reference: string) => Promise<Brand | null>;
  getById: (reference: string) => Promise<Brand | null>;
  getByName: (reference: string) => Promise<Brand | null>;
  create: (reference: ICreateBrandParams) => Promise<Brand | null>;
  update: (reference: IUpdateBrandParams) => Promise<Brand | null>;
}
