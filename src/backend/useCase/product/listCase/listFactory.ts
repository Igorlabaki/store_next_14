import { ListProductCase } from './listCase';
import { prismaClient } from '@/services/prismaClient';
import { ListProductController } from './listController';
import { PrismaProductRepository } from '@/backend/repository/inPrisma/prismaProductRepository';

export const listProductFactory = () => {
  const prismaImageRepository = new PrismaProductRepository(prismaClient);
  const listPorductCase = new ListProductCase(prismaImageRepository);
  const listPorductController = new ListProductController(listPorductCase);

  return listPorductController;
};
