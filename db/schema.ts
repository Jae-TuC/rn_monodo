import * as t from "drizzle-orm/sqlite-core";
import { sql, relations } from "drizzle-orm";

export const todos = t.sqliteTable("todos", {
  id: t.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  content: t.text().notNull(),
  date: t.integer({ mode: "timestamp" }).notNull(),
  decription: t.text().default(""),
  done: t.integer().default(0),
  createdAt: t.text().default(sql`CURRENT_TIMESTAMP`),
});

export type TodoPros = typeof todos.$inferSelect;
