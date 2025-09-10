import { string, z } from "zod";

export const signupSchema = z.object({
    name:z.string().min(1).max(10),
    username:z.string().email(),
    password:z.string().min(5).max(15),
});

export const signinSchema = z.object({
    username:z.string().email(),
    password:z.string().min(5).max(15).optional(),
    mobileNo:z.string().min(10).max(10).optional(),
    otp:z.string().min(6).max(6).optional()
});

export const blogSchema = z.object({
    title:z.string().min(5).max(100),
    subtitle:z.string().min(5).max(100),
    writings:z.string(),
    coverImg:z.string(), // Required field as per schema
    tags:z.string().optional(),
    thumbnailImg:z.string().optional()
});

export const subscriberSchema = z.object({
    subscriberName:z.string().optional(),
    subscriberEmail:z.string().email().optional()
});

export const imageSchema = z.object({
    url:z.string(),
});

// Middleware type
export interface AuthRequest extends Request {
    userId?: string;
}

  