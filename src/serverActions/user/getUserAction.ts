"use server";

import { getUserByIdFactory } from "@/backend/useCase/user/getUserByIdCase/getUserByIdFactory";

export default async function getUserByIdServerAction(userId: string | undefined) {
  if (userId) {
    const user = await getUserByIdFactory().handle(userId)
    return user
  }
  return null;
}
