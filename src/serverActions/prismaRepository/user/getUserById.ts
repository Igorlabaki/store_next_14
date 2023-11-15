import { prismaClient } from "@/services/prismaClient";

interface GetUserByIdParams{
    userId: string;
}

export default async function getUserById({userId}:GetUserByIdParams) {
  const user = await prismaClient.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      Cart: {
        include: {
          ProductCart: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  return user;
}
