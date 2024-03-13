import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { doctorRouter, testRouter } from "./routes";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(testRouter);
app.use(doctorRouter);

app
  .listen(PORT, () => {
    console.log(`Server running at: http://127.0.0.1:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
