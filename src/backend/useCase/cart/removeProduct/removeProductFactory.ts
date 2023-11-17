import { prismaClient } from '@/services/prismaClient';
import { RemoveProductCartCase } from './removeProductCase';
import { RemoveProductController } from './removeProductController';
import { PrismaCartRepository } from '@/backend/repository/inPrisma/prismaCartRepository';
import { PrismaProductCartRepository } from '@/backend/repository/inPrisma/prismaProductCartRepository';

export const removeProductCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const prismaProductCartRepository = new PrismaProductCartRepository(prismaClient);
  const removeProductCartsCase = new RemoveProductCartCase(prismaCartRepository,prismaProductCartRepository);
  const removeProductCartController = new RemoveProductController(removeProductCartsCase);

  return removeProductCartController;
};
