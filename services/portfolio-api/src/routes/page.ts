import { Router } from "express";
import { projectSchema } from "../types";
import { prismaClient } from "../db/db";

const router = Router();

router.post("/createproject",async(req,res)=>{
    try {
        const parsedBody = projectSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(402).json({message:"Invalid Inputs!",error:parsedBody.error.errors})
        }
        const { projectTitle, projectDescription, githubLink, projectImg } = parsedBody.data;
        const createProject = await prismaClient.projects.create({
            data:{
                projectTitle,
                projectDescription,
                githubLink,
                projectImg
            }
        })
        res.json({
            message:"Project Uploaded Successfully!",
            projectDetails:createProject
        })
    } catch (error) {
        res.status(411).json({message:"Something went wrong!!"})
    }
});

router.get("/getallprojects",async(req,res)=>{
    try {
        const getallprojects = await prismaClient.projects.findMany({
        })
        if (getallprojects) {
            res.json({
            message:"Project Fetched Successfully!",
            projects:getallprojects
        })
    }   

    } catch (error) {
        res.status(411).json({message:"Something went wrong!!"})
    }
})

export const pageRouter = router;