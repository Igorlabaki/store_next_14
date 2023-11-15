import { prismaClient } from '@/services/prismaClient';
import { DeleteProductCase } from './deleteCase';
import { DeleteProductController } from './deleteController';
import { PrismaProductRepository } from '@/backend/repository/inPrisma/prismaProductRepository';

export const deleteProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository(prismaClient);
  const deleteProductsCase = new DeleteProductCase(prismaProductRepository);
  const deleteProductController = new DeleteProductController(deleteProductsCase);

  return deleteProductController;
};
