import { prismaClient } from "@/providers/prismaClient";
import { CreateProductCase } from "./createCase";
import { CreateProductController } from "./createController";
import { PrismaProductRepository } from "@/backend/repository/inPrisma/prismaProductRepository";

export const createProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository(prismaClient);
  const createProductsCase = new CreateProductCase(prismaProductRepository);
  const createProductController = new CreateProductController(createProductsCase);

  return createProductController;
};
