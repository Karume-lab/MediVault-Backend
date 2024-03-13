import { Server } from "azle";
import express from "express";
import cors from "cors";
import {
  hospitalProfileRouter,
  medicalRecordRouter,
  profileRouter,
  requestAccessRouter,
  testRouter,
  userRouter,
} from "../routes";

export default Server(() => {
  const app = express();
  app.use(express.json());
  app.use(testRouter);
  app.use(userRouter);
  app.use(medicalRecordRouter);
  app.use(profileRouter);
  app.use(requestAccessRouter);
  app.use(hospitalProfileRouter);

  app.use(cors);
  return app.listen();
});
