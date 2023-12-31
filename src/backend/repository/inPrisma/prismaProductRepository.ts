import { PrismaClient, Product } from "@prisma/client";
import {
  ICreateProductParams,
  IUpdateProductParams,
  IProductRepository,
  IListByBrandId,
  IListProduct,
  IListProductReturn,
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

  async list({skip,take,search}: IListProduct): Promise<IListProductReturn> {
    if (typeof(search) === "string") {
      const listlength = await this.prisma.product.findMany({
        where: {
          name: {
            contains: search,
          },
        },
      });

      const listProductd = await this.prisma.product.findMany({
        where: {
          name: {
            contains: search,
          },
        },
        skip,
        take: 6,
      });
      return {products: listProductd, listLength: listlength.length};
    } else {
      const listlength = await this.prisma.product.findMany();

      const listProductd = await this.prisma.product.findMany({
        skip,
        take: 6
      });

      return {products:listProductd, listLength: listlength.length};
    }
  }

  async listByName(search?: string): Promise<Product[]> {
    if (search?.includes("All")) {
      const listProductd = await this.prisma.product.findMany({
        take: 6,
      });
      return listProductd;
    } else {
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
          fk_brand_id: brandId,
        },
      });
      return allProductsByBrandId;
    }
  }
}
