import { ListByBrandIdCase } from "./listByBrandIdCase";
import { prismaClient } from "@/services/prismaClient";
import { ListByBrandIdController } from "./listByBrandIdController";
import { PrismaProductRepository } from "@/backend/repository/inPrisma/prismaProductRepository";

export const listProductsByBrandIdFactory = () => {
  const prismaImageRepository = new PrismaProductRepository(prismaClient);
  const listByBrandIdCase = new ListByBrandIdCase(prismaImageRepository);
  const listByBrandIdController = new ListByBrandIdController(listByBrandIdCase);

  return listByBrandIdController;
};
