import { prismaClient } from "@/services/prismaClient";
import { VerifyIfProductCartExistsCase } from "./verifyIfProductCartExistsCase";
import { PrismaProductCartRepository } from "@/backend/repository/inPrisma/prismaProductCartRepository";
import { VerifyIfProductCartExistsController } from "./verifyIfProductCartExistsController";


export const verifyIfProductCartExistsFactory = () => {
  const prismaUserRepository = new PrismaProductCartRepository(prismaClient);
  const verifyIfProductCartExistsCase = new VerifyIfProductCartExistsCase(
    prismaUserRepository
  );
  const verifyIfProductCartExistsController =
    new VerifyIfProductCartExistsController(verifyIfProductCartExistsCase);

  return verifyIfProductCartExistsController;
};
