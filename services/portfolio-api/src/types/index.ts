import { z } from "zod";

export const projectSchema = z.object({
    projectTitle:z.string(),
    projectDescription:z.string(),
    githubLink:z.string().trim(),
    projectImg:z.string().trim().optional()
})