import { Router, Request, Response, NextFunction } from "express";
import { blogSchema, subscriberSchema, imageSchema } from "../types";
import { prismaClient } from "../db/db";

const router = Router();
router.get("/getblogs", async (req, res) => {
  try {
    const getAllBlogs = await prismaClient.blog.findMany({
      include: {
        blogImages: true,
        likes: true,
      },
    });
    if (!getAllBlogs) return res.status(403).json({ message: [] });
    res.json({
      blogs: getAllBlogs,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.get("/getblog/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await prismaClient.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        blogImages: true,
        likes: true,
      },
    });
    if (!blog)
      return res.status(404).json({ message: "Blog not found!" });
    res.json({
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/createblog/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const parsedBody = blogSchema.safeParse(req.body);
    if (!parsedBody.success) {
      console.log(parsedBody.error?.errors);
      return res.status(403).json({ message: "Invalid inputs!" });
    }
    const { title, subtitle, writings, coverImg, tags, thumbnailImg } = parsedBody.data;
    const blog = await prismaClient.blog.create({
      data: {
        title: title,
        subtitle: subtitle,
        writings: writings,
        coverImg: coverImg,
        userId: userId,
        tags: tags,
        thumbnailImg: thumbnailImg,
      },
    });
    res.json({
      message: "Blog Published Successfully!!",
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/like/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.body.userId;
    
    const blog = await prismaClient.blog.findUnique({
      where: {
        id: blogId,
      },
    });
    
    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    // Check if user already liked this blog
    const existingLike = await prismaClient.likes.findFirst({
      where: {
        blogId: blogId,
        userId: userId,
      },
    });

    if (existingLike) {
      return res.status(400).json({ message: "Blog already liked!" });
    }

    await prismaClient.likes.create({
      data: {
        userId: userId,
        blogId: blogId,
      },
    });
    res.json({
      message: "Liked Blog Successfully!!",
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.get("/getlikes/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const getAllLikes = await prismaClient.likes.findMany({
      where: {
        blogId: blogId,
      },
    });
    res.json({
      likes: getAllLikes,
      count: getAllLikes.length,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/subscribe", async (req, res) => {
  try {
    const parsedBody = subscriberSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(403).json({ message: "Invalid inputs!" });
    }
    const { subscriberName, subscriberEmail } = parsedBody.data;
    
    // Check if email already subscribed
    const existingSubscriber = await prismaClient.subscribers.findFirst({
      where: {
        subscriberEmail: subscriberEmail,
      },
    });

    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed!" });
    }

    await prismaClient.subscribers.create({
      data: {
        subscriberName: subscriberName,
        subscriberEmail: subscriberEmail,
      },
    });
    res.json({
      message: "Subscribed Successfully!!",
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/addimages/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const parsedBody = imageSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(403).json({ message: "Invalid inputs!" });
    }
    const { url } = parsedBody.data;
    
    const blog = await prismaClient.blog.findUnique({
      where: {
        id: blogId,
      },
    });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }
    await prismaClient.images.create({
      data: {
        url: url,
        blogId: blogId,
      },
    });
    res.json({
      message: "Blog Image Added Successfully!!",
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

export const blogRouter = router;