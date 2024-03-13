import { Router } from "express";
import { test } from "../controllers";

const testRouter = Router();

testRouter.get("/test", test);

export default testRouter;
