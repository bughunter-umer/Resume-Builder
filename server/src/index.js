import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoutes.js";  // ✅ must match file path

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
