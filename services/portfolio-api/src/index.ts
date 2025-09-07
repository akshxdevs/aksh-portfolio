import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { pageRouter } from "./routes/page";

const app = express();

app.use(express.json());
app.use(
    cors({
      origin: "https://akshxdevs.com",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // Allow cookies & headers
    })
  );

app.use("/about",pageRouter);
// app.use("/home",);
// app.use("/projects",);
// app.use("/contact-me",);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})