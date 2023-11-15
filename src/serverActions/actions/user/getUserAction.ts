"use server";

import getUserById from "@/serverActions/prismaRepository/user/getUserById";

export default async function getUserServerAction(userId: string | undefined) {
  if (userId) {
    const user = await getUserById({ userId });
    return user;
  }

  return null;
}
