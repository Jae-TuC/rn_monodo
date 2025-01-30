import * as t from "drizzle-orm/sqlite-core";
import { sql, relations } from "drizzle-orm";

export const todos = t.sqliteTable("todos", {
  id: t.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  decription: t.text().default(""),
  content: t.text().notNull(),
  date: t.integer({ mode: "timestamp" }).notNull(),
  done: t.integer().default(0),
  createdAt: t.text().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: t.text().default(sql`CURRENT_TIMESTAMP`),
});

export type TodoPros = typeof todos.$inferSelect;
