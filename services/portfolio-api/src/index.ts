import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { pageRouter } from "./routes/page";
import { prismaClient } from "./db/db";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/projects", pageRouter);

app.get("/health", (req, res) => {
  res.json({ message: "Portfolio API is running!", status: "healthy" });
});

// Add database test endpoint
app.get("/test-db", async (req, res) => {
  try {
    const result = await prismaClient.$queryRaw`SELECT 1 as test`;
    res.json({ message: "Database connection successful", result });
  } catch (error) {
    console.error("Database test failed:", error);
    res.status(500).json({ message: "Database connection failed", error: error instanceof Error ? error.message : "Unknown error" });
  }
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Portfolio API server running on port ${PORT}`);
});
