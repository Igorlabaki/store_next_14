import { Cart, PrismaClient } from "@prisma/client";
import { ICartRepository, IUpdateCartTotal } from "../ICartRepository";
import { CartIncludeProductCart } from "@/types";

export class PrismaCartRepository implements ICartRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(reference: string): Promise<Cart | null> {
    return await this.prisma.cart.create({
      data: {
        user: {
          connect: {
            id: reference,
          },
        },
      },
      include: {
        ProductCart: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async getById(reference: string): Promise<Cart | null> {
    return await this.prisma.cart.findFirst({
      where: {
        id: reference,
      },
      include: {
        ProductCart: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async getByUserId(reference: string): Promise<Cart | null> {
    return await this.prisma.cart.findFirst({
      where: {
        userId: reference,
      },
      include: {
        ProductCart: {
          include: {
            product: true,
            cart: {
              include:{
                user: true
              }
            }
          },
        },
        user: true
      },
    });
  }

  async delete(reference: string): Promise<Cart | null> {
    return await this.prisma.cart.delete({
      where: {
        userId: reference,
      },
    });
  }

  async updateTotal({cartId,total}: IUpdateCartTotal): Promise<Cart | null> {
    return await this.prisma.cart.update({
      where: {
        id: cartId,
      },
      data:{
        total
      }
    });
  }

  async list(): Promise<Cart[]> {
    return await this.prisma.cart.findMany({
      include: {
        ProductCart: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });
  }
}
