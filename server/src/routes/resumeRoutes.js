import express from "express";
import { createResume, getResumes, getResumeById } from "../controllers/resumeController.js";

const router = express.Router();

// POST -> Create resume
router.post("/", createResume);

// GET -> Get all resumes
router.get("/", getResumes);

// GET -> Get resume by ID
router.get("/:id", getResumeById);

export default router;
