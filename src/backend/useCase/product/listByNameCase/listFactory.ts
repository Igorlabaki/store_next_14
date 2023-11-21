
import { PrismaProductRepository } from '@/backend/repository/inPrisma/prismaProductRepository';
import { prismaClient } from '@/services/prismaClient';
import { ListByNameProductCase } from './listByNameCase';
import { ListByNameProductController } from './listController';

export const listByNameProductFactory = () => {
  const prismaImageRepository = new PrismaProductRepository(prismaClient);
  const listByNamePorductCase = new ListByNameProductCase(prismaImageRepository);
  const listByNamePorductController = new ListByNameProductController(listByNamePorductCase);

  return listByNamePorductController;
};
