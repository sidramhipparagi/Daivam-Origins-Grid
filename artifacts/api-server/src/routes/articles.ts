import { Router } from "express";
import { db } from "@workspace/db";
import { articlesTable } from "@workspace/db";

const router = Router();

router.get("/articles", async (req, res) => {
  try {
    const articles = await db.select().from(articlesTable).orderBy(articlesTable.id);
    res.json(articles);
  } catch (err) {
    req.log.error({ err }, "Error fetching articles");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
