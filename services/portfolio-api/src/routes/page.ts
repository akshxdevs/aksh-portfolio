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
    const getallprojects = await prismaClient.projects.findMany({});
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

export const pageRouter = router;
