// backend/routes/resumeRoutes.js
import express from "express";
import pool from "../db.js";  // pg connection

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, education, skills, photo } = req.body;

    const result = await pool.query(
      "INSERT INTO resumes (name, email, phone, education, skills, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, phone, education, skills, photo]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error saving resume:", error.message);
    res.status(500).json({ error: "Failed to save resume" });
  }
});

export default router;
