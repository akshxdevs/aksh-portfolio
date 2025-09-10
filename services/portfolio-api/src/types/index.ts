import { Status } from "@prisma/client";
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  intro: z.string(),
  githubLink: z.string().trim(),
  category: z.string().trim(),
  status: z.nativeEnum(Status),
  imgUrl: z.string().trim(),
  webUrl: z.string().trim(),
  techStack: z.array(z.string()),
});
