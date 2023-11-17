import { prismaClient } from '@/services/prismaClient';
import { DeleteProductCartCase } from './deleteCase';
import { DeleteProductCartController } from './deleteController';
import { PrismaProductRepository } from '@/backend/repository/inPrisma/prismaProductRepository';
import { PrismaCartRepository } from '@/backend/repository/inPrisma/prismaCartRepository';
import { PrismaProductCartRepository } from '@/backend/repository/inPrisma/prismaProductCartRepository';

export const deleteProductCartFactory = () => {
  const prismaProductCartRepository = new PrismaProductCartRepository(prismaClient);
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const deleteProductsCase = new DeleteProductCartCase(prismaProductCartRepository,prismaCartRepository);
  const deleteProductController = new DeleteProductCartController(deleteProductsCase);

  return deleteProductController;
};
