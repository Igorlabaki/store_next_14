import { PrismaClient, Product } from "@prisma/client";
import {
  ICreateProductParams,
  IUpdateProductParams,
  IProductRepository,
  IListByBrandId,
} from "../IProductRepository";

export class PrismaProductRepository implements IProductRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(productParams: ICreateProductParams): Promise<Product | null> {
    return await this.prisma.product.create({
      data: {
        brand: {
          connect: {
            id: productParams.brandId,
          },
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

  async update({
    id,
    imageUrl,
    name,
    price,
  }: IUpdateProductParams): Promise<Product | null> {
    return await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name,
        price,
        imageUrl,
      },
    });
  }

  async list(search?: string): Promise<Product[]> {
    if (search && search.includes("All")) {
      const listProductd = await this.prisma.product.findMany({
        take: 6,
      });
      return listProductd;
    }

    const listProductd = await this.prisma.product.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      take: 6,
    });
    return listProductd;
  }

  async listByBrandId({
    brandId,
    search,
  }: IListByBrandId): Promise<Product[] | null> {
    if (search) {
      const filteredProductsByBrandId = await this.prisma.product.findMany({
        where: {
          fk_brand_id: brandId,
          name: {
            contains: search,
          },
        },
        include: {
          brand: true,
        },
      });

      return filteredProductsByBrandId;
    } else {
      const allProductsByBrandId = await this.prisma.product.findMany({
        where: {
          fk_brand_id: brandId
        },
      });
      return allProductsByBrandId;
    }
  }
}
