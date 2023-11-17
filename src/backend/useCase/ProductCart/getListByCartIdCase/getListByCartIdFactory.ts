import { GetListByCartIdCase } from "./getListByCartIdCase";
import { prismaClient } from "@/services/prismaClient";
import { GetListByCartIdController } from "./getListByCartIdController";
import { PrismaProductCartRepository } from "@/backend/repository/inPrisma/prismaProductCartRepository";

export const getListByCartidFactory = () => {
  const prismaRepository = new PrismaProductCartRepository(prismaClient);
  const getListByCartIdCase = new GetListByCartIdCase(prismaRepository);
  const getListByCartIdController = new GetListByCartIdController(
    getListByCartIdCase
  );

  return getListByCartIdController;
};
