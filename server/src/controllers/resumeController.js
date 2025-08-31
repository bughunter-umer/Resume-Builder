import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create resume
export const createResume = async (req, res) => {
  try {
    const { name, email, experience, skills } = req.body;

    const resume = await prisma.resume.create({
      data: {
        name,
        email,
        experience,
        skills: skills || [], // empty array fallback
      },
    });

    res.status(201).json(resume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create resume" });
  }
};

// Get all resumes
export const getResumes = async (req, res) => {
  try {
    const resumes = await prisma.resume.findMany();
    res.json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
};

// Get resume by ID  ✅ (this was missing)
export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await prisma.resume.findUnique({
      where: { id: parseInt(id) },
    });

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch resume" });
  }
};
