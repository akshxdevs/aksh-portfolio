import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient } from "../db/db";
import { authMiddleware, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

// User signup
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User created successfully",
      user,
      token
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await prismaClient.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt
      },
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get current user profile
router.get("/profile", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        blogs: {
          select: {
            id: true,
            title: true,
            subtitle: true,
            createdOn: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update user profile
router.put("/profile", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name } = req.body;

    const updatedUser = await prismaClient.user.update({
      where: { id: req.userId },
      data: { name },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const userRouter = router;
