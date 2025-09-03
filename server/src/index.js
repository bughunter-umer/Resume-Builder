import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
import PDFDocument from "pdfkit"; // ✅ for generating PDF with photo

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // ✅ allow large Base64 images

// ✅ PostgreSQL Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ PostgreSQL connection error:", err));

// ✅ Ensure table exists (with photo column)
const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS resumes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      phone VARCHAR(20),
      education TEXT,
      skills TEXT,
      photo TEXT
    );
  `);
};
createTable();


// ✅ Create Resume (with photo)
app.post("/api/resumes", async (req, res) => {
  try {
    const { name, email, phone, education, skills, photo, address, experience, projects } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }

    const result = await pool.query(
      `INSERT INTO resumes (name, email, phone, education, skills, photo, address, experience, projects)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [name, email, phone, education, skills, photo, address, experience, projects]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error saving resume:", error);
    res.status(500).json({ error: "Failed to create resume" });
  }
});



// ✅ Get All Resumes
app.get("/api/resumes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM resumes ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error fetching resumes:", error);
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});


// ✅ Download Resume as PDF (with photo)
app.get("/api/resumes/:id/download", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM resumes WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Resume not found" });
    }

    const resume = result.rows[0];

    // ✅ Generate PDF
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");

    doc.pipe(res);

    doc.fontSize(20).text("Resume", { align: "center" });
    doc.moveDown();

    if (resume.photo) {
      try {
        // photo is Base64 → convert to buffer
        const base64Data = resume.photo.split(";base64,").pop();
        const imgBuffer = Buffer.from(base64Data, "base64");
        doc.image(imgBuffer, { fit: [100, 100], align: "center" });
        doc.moveDown();
      } catch (err) {
        console.warn("⚠️ Could not render photo in PDF:", err.message);
      }
    }

    doc.fontSize(14).text(`Name: ${resume.name}`);
    doc.text(`Email: ${resume.email}`);
    doc.text(`Phone: ${resume.phone}`);
    doc.moveDown();
    doc.text(`Education: ${resume.education}`);
    doc.text(`Skills: ${resume.skills}`);

    doc.end();
  } catch (error) {
    console.error("❌ Error downloading resume:", error);
    res.status(500).json({ error: "Failed to download resume" });
  }
});


// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
