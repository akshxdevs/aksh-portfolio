import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { pageRouter } from "./routes/page";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/projects", pageRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ message: "Portfolio API is running!", status: "healthy" });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Portfolio API server running on port ${PORT}`);
});
