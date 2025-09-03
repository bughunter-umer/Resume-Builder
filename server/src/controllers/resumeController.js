export const createResume = async (req, res) => {
  try {
    const { name, email, phone, address, education, experience, projects, skills } = req.body;

    const resume = await prisma.resume.create({
      data: {
        name,
        email,
        phone,
        address,
        education,
        experience: experience || [],
        projects: projects || [],
        skills: skills || [],
      },
    });

    res.status(201).json(resume);
  } catch (error) {
    console.error("❌ Create resume error:", error);
    res.status(500).json({ error: "Failed to create resume" });
  }
};
