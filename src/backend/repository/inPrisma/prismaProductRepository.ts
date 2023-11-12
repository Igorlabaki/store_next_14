import { PrismaClient, Product } from '@prisma/client';
import { ICreateProductParams,IUpdateProductParams, IProductRepository } from '../IProduct';

export class PrismaProductRepository implements IProductRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(productParams: ICreateProductParams): Promise<Product | null> {
    return await this.prisma.product.create({
      data: {
        brand:{
          connect:{
            id: productParams.brandId
          }
        },
        ...productParams,
      },
    });
  }

  async delete(reference: string): Promise<Product | null> {
    return await this.prisma.product.delete({
      where: {
        id: reference,
      },
    });
  }

  async getById(reference: string): Promise<Product | null> {
    return await this.prisma.product.findFirst({
      where: {
        id: reference,
      },
    });
  }

  async getByName(reference: string): Promise<Product | null> {
    return await this.prisma.product.findFirst({
      where: {
        name: reference,
      },
    });
  }

  async update({id,imageUrl,name,price} : IUpdateProductParams): Promise<Product | null> {
    return await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name,
        price,
        imageUrl
      },
    });
  }

  async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }
}
