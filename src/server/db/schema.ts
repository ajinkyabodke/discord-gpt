// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgEnum,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `discord-gpt_${name}`);
export const messageRoleEnum = pgEnum("messageRoleEnum", ["assistant", "user"]);

export const messages = createTable("messages", {
  id: serial("id").primaryKey(),
  userId: integer("userId")
    .references(() => users.userId)
    .notNull(),
  content: text("content").notNull(),
  role: messageRoleEnum("role").notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deletedAt", { withTimezone: true }),
});

export const users = createTable("users", {
  userId: varchar("userId", { length: 191 }).primaryKey().notNull(), // matches with Clerk
  emailAddress: varchar("emailAddress", { length: 191 }).unique().notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp("deletedAt", { withTimezone: true }),
});
