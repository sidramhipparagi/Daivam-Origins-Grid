import { Router } from "express";
import { db } from "@workspace/db";
import { productsTable } from "@workspace/db";
import { eq, sql } from "drizzle-orm";
import {
  ListProductsQueryParams,
  GetProductParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/products/featured", async (req, res) => {
  try {
    const products = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.featured, true))
      .limit(8);

    const mapped = products.map((p) => ({
      ...p,
      price: Number(p.price),
      images: p.images ?? [],
    }));
    res.json(mapped);
  } catch (err) {
    req.log.error({ err }, "Error fetching featured products");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products/categories", async (req, res) => {
  try {
    const rows = await db
      .selectDistinct({ category: productsTable.category })
      .from(productsTable);
    res.json(rows.map((r) => r.category));
  } catch (err) {
    req.log.error({ err }, "Error fetching categories");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products", async (req, res) => {
  try {
    const parsed = ListProductsQueryParams.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid query params" });
      return;
    }
    const { category, featured } = parsed.data;

    let query = db.select().from(productsTable);

    if (category) {
      query = query.where(eq(productsTable.category, category)) as typeof query;
    } else if (featured !== undefined) {
      query = query.where(eq(productsTable.featured, featured)) as typeof query;
    }

    const products = await query;
    const mapped = products.map((p) => ({
      ...p,
      price: Number(p.price),
      images: p.images ?? [],
    }));
    res.json(mapped);
  } catch (err) {
    req.log.error({ err }, "Error fetching products");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const parsed = GetProductParams.safeParse(req.params);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid product id" });
      return;
    }
    const { id } = parsed.data;
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id))
      .limit(1);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.json({
      ...product,
      price: Number(product.price),
      images: product.images ?? [],
    });
  } catch (err) {
    req.log.error({ err }, "Error fetching product");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
