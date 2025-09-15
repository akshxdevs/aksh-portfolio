import { Router } from "express";
import { projectSchema } from "../types";
import { prismaClient } from "../db/db";

const router = Router();

router.post("/createproject", async (req, res) => {
  try {
    const parsedBody = projectSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res
        .status(400)
        .json({ message: "Invalid Inputs!", error: parsedBody.error.errors });
    }
    const {
      title,
      description,
      githubLink,
      imgUrl,
      webUrl,
      category,
      status,
      techStack,
      intro,
    } = parsedBody.data;
    
    const createProject = await prismaClient.projects.create({
      data: {
        title,
        description,
        githubLink,
        imgUrl,
        webUrl,
        category,
        status,
        techStack,
        intro,
      },
    });
    res.status(201).json({
      message: "Project Uploaded Successfully!",
      projectDetails: createProject,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Something went wrong!!" });
  }
});

router.get("/getallprojects", async (req, res) => {
  try {
    console.log("Fetching all projects...");
    const getallprojects = await prismaClient.projects.findMany({});
    console.log("Found projects:", getallprojects.length);
    console.log("Projects data:", getallprojects);
    res.json(getallprojects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Something went wrong!!" });
  }
});

router.get("/getproject/:projectName", async (req, res) => {
  try {
    const getproject = await prismaClient.projects.findFirst({
      where: {
        title: req.params.projectName,
      },
    });
    if (getproject) {
      res.json(getproject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Something went wrong!!" });
  }
});

// Debug endpoint to check database connection
router.get("/debug-db", async (req, res) => {
  try {
    // Get database URL (masked for security)
    const dbUrl = process.env.DATABASE_URL;
    const maskedUrl = dbUrl ? dbUrl.replace(/\/\/[^:]+:[^@]+@/, '//***:***@') : 'Not set';
    
    // Try to get table info
    const tableInfo = await prismaClient.$queryRaw`
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'Projects' OR table_name = 'projects'
      ORDER BY table_name, ordinal_position;
    `;
    
    // Try to count records
    const count = await prismaClient.projects.count();
    
    // Try to get all records
    const allRecords = await prismaClient.projects.findMany();
    
    res.json({
      connected: true,
      databaseUrl: maskedUrl,
      tableInfo,
      projectCount: count,
      allRecords,
      message: "Database debug info"
    });
  } catch (error) {
    console.error("Debug error:", error);
    res.status(500).json({ 
      message: "Debug failed", 
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

export const pageRouter = router;
