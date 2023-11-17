import { ListBrandCase } from './listCase';
import { prismaClient } from '@/services/prismaClient';
import { ListBrandController } from './listController';
import { PrismaBrandRepository } from '@/backend/repository/inPrisma/prismaBrandRepository';

export const getListBrandFactory = () => {
  const prismaImageRepository = new PrismaBrandRepository(prismaClient);
  const listBrandCase = new ListBrandCase(prismaImageRepository);
  const listBrandController = new ListBrandController(listBrandCase);

  return listBrandController;
};
