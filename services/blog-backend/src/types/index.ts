import { string, z } from "zod";

// User authentication schemas
export const signupSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters").max(50, "Password too long"),
    name: z.string().min(1, "Name is required").max(100, "Name too long").optional(),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
});

// Blog schemas
export const blogSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters").max(200, "Title too long"),
    subtitle: z.string().min(5, "Subtitle must be at least 5 characters").max(300, "Subtitle too long"),
    writings: z.string().min(10, "Content must be at least 10 characters"),
    coverImg: z.string().url("Invalid cover image URL"),
    tags: z.array(z.string()).optional(),
    thumbnailImg: z.string().url("Invalid thumbnail URL").optional()
});

export const subscriberSchema = z.object({
    subscriberName: z.string().min(1, "Name is required").optional(),
    subscriberEmail: z.string().email("Invalid email format").optional()
});

export const imageSchema = z.object({
    url: z.string().url("Invalid image URL"),
});

// User profile update schema
export const updateProfileSchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name too long").optional(),
});

// Type definitions
export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type BlogInput = z.infer<typeof blogSchema>;
export type SubscriberInput = z.infer<typeof subscriberSchema>;
export type ImageInput = z.infer<typeof imageSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
