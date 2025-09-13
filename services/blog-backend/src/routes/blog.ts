import { Router, Request, Response, NextFunction } from "express";
import { blogSchema, subscriberSchema, imageSchema } from "../types";
import { prismaClient } from "../db/db";
import { authMiddleware, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

router.get("/getblogs", async (req, res) => {
  try {
    const getAllBlogs = await prismaClient.blog.findMany({
      include: {
        blogImages: true,
        likes: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdOn: 'desc'
      }
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

router.get("/getblog/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const blog = await prismaClient.blog.findFirst({
      where: {
        title: title,
      },
      include: {
        blogImages: true,
        likes: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
    });
    
    if (!blog) return res.status(404).json({ message: "Blog not found!" });
    
    res.json({
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/createblog", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
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
        tags: tags || [],
        thumbnailImg: thumbnailImg,
        authorId: req.userId!
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
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

router.post("/like/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
    const blogId = req.params.id;
    
    const blog = await prismaClient.blog.findUnique({
      where: {
        id: blogId,
      },
    });
    
    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    const existingLike = await prismaClient.likes.findFirst({
      where: {
        blogId: blogId,
        userId: req.userId
      },
    });

    if (existingLike) {
      await prismaClient.likes.delete({
        where: {
          id: existingLike.id
        }
      });
      
      res.json({
        message: "Blog unliked successfully!",
        action: "unliked"
      });
    } else {
      await prismaClient.likes.create({
        data: {
          blogId: blogId,
          userId: req.userId!
        },
      });
      
      res.json({
        message: "Blog liked successfully!",
        action: "liked"
      });
    }
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
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
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
router.post("/getAllsubscribe", async (req, res) => {
  try {
    const getAllSubscribers = await prismaClient.subscribers.findMany();
    res.json({
      subscribers: getAllSubscribers,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.post("/addimages/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
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

    if (blog.authorId !== req.userId) {
      return res.status(403).json({ message: "You are not authorized to add images to this blog!" });
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

router.get("/myblogs", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
    const userBlogs = await prismaClient.blog.findMany({
      where: {
        authorId: req.userId
      },
      include: {
        blogImages: true,
        likes: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdOn: 'desc'
      }
    });

    res.json({
      blogs: userBlogs,
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

router.delete("/deleteblog/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
    const blogId = req.params.id;
    
    const blog = await prismaClient.blog.findUnique({
      where: { id: blogId }
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    if (blog.authorId !== req.userId) {
      return res.status(403).json({ message: "You are not authorized to delete this blog!" });
    }

    await prismaClient.images.deleteMany({
      where: { blogId: blogId }
    });

    await prismaClient.likes.deleteMany({
      where: { blogId: blogId }
    });

    await prismaClient.blog.delete({
      where: { id: blogId }
    });

    res.json({
      message: "Blog deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(411).json({ message: "Something went wrong!!" });
  }
});

export const blogRouter = router;
