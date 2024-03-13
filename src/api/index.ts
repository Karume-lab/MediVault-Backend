import { Server } from "azle";
import express from "express";
import { testRouter, userRouter } from "../routes";

export default Server(() => {
  const app = express();

  app.use(express.json());
  app.use(testRouter);
  app.use(userRouter);

  return app.listen();
});
