"use server";

import { db } from "./db";

export const getUserByUserId = async (userId: string) => {
  return db.query.users.findFirst({
    where: (u, { eq }) => eq(u.userId, userId),
  });
};
