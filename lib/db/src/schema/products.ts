import { pgTable, text, serial, numeric, boolean, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url").notNull(),
  images: json("images").$type<string[]>().default([]),
  origin: text("origin").notNull(),
  material: text("material").notNull(),
  description: text("description"),
  featured: boolean("featured").default(false),
  era: text("era"),
  dimensions: text("dimensions"),
  weight: text("weight"),
  inStock: boolean("in_stock").default(true),
});

export const insertProductSchema = createInsertSchema(productsTable).omit({ id: true });
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof productsTable.$inferSelect;
