import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { apiRouter } from "./routes/page";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/projects", apiRouter);


app.listen(PORT, () => {
  console.log(`Portfolio API server running on port ${PORT}`);
});
