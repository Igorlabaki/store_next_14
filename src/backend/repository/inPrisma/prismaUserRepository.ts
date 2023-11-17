import { UserIncudeCartProductCart } from '@/types';
import { IUserRepository, IUserParams } from '../IUserRepository';

import { PrismaClient, User } from '@prisma/client';

export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(userParams: IUserParams): Promise<User | null> {
    return await this.prisma.user.create({
      data: {
        ...userParams,
      },
    });
  }

  async delete(reference: string): Promise<User | null> {
    return await this.prisma.user.delete({
      where: {
        id: reference,
      },
    });
  }

  async getById(reference: string): Promise<UserIncudeCartProductCart | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: reference,
      },
      include: {
        Cart: {
          include: {
            ProductCart: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
  
    return user as UserIncudeCartProductCart ;
  }

  async updatePassword({ id, password }: IUserParams): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }

  async verifyIfUserExist(email: string): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async update(data: IUserParams): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
  }
}
