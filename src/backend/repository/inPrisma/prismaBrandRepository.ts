import { PrismaClient, Brand } from '@prisma/client';
import { ICreateBrandParams,IUpdateBrandParams, IBrandRepository } from '../IBrand';

export class PrismaBrandRepository implements IBrandRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create({name,imageUrl}: ICreateBrandParams): Promise<Brand | null> {
    return await this.prisma.brand.create({
      data: {
       name,
       imageUrl
      },
    });
  }

  async delete(reference: string): Promise<Brand | null> {
    return await this.prisma.brand.delete({
      where: {
        id: reference,
      },
    });
  }

  async getById(reference: string): Promise<Brand | null> {
    return await this.prisma.brand.findFirst({
      where: {
        id: reference,
      },
    });
  }

  async getByName(reference: string): Promise<Brand | null> {
    return await this.prisma.brand.findFirst({
      where: {
        name: reference,
      },
    });
  }

  async update({name, id, imageUrl} : IUpdateBrandParams): Promise<Brand | null> {
    return await this.prisma.brand.update({
      where: {
        id,
      },
      data: {
        name,
        imageUrl
      },
    });
  }

  async list(): Promise<Brand[]> {
    return await this.prisma.brand.findMany();
  }
}
