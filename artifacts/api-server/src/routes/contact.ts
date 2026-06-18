import { Router } from "express";
import { db } from "@workspace/db";
import { contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const parsed = SubmitContactBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid contact data" });
      return;
    }

    await db.insert(contactsTable).values({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      phone: parsed.data.phone ?? null,
      subject: parsed.data.subject ?? null,
    });

    res.json({ success: true, message: "Your message has been received. We will get back to you shortly." });
  } catch (err) {
    req.log.error({ err }, "Error submitting contact");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
