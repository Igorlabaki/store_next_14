import { prismaClient } from '@/services/prismaClient';
import { GetBrandByIdCase } from './getBrandByIdCase';
import { GetBrandByIdController } from './getBrandByIdController';
import { PrismaBrandRepository } from '@/backend/repository/inPrisma/prismaBrandRepository';

export const getBrandByIdFactory = () => {
  const prismaBrandRepository = new PrismaBrandRepository(prismaClient);
  const getBrandCase = new GetBrandByIdCase(prismaBrandRepository);
  const getBrandController = new GetBrandByIdController(getBrandCase);

  return getBrandController;
};
