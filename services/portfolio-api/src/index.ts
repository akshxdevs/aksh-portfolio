import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { pageRouter } from "./routes/page";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/projects", pageRouter);

app.get("/health", (req, res) => {
  res.json({ message: "Portfolio API is running!", status: "healthy" });
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
