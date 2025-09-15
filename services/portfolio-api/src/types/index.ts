import { Status } from "@prisma/client";
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().trim().max(50).min(10),
  description: z.string().trim().max(500).min(30),
  intro: z.string().trim().max(30).min(10),
  githubLink: z.string().trim().url(),
  category: z.string().trim(),
  status: z.nativeEnum(Status),
  imgUrl: z.string().trim().url(),
  webUrl: z.string().trim().url(),
  techStack: z.array(z.string()),
});
