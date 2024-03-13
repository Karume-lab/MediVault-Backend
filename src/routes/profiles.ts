import { Router } from "express";
import {
  addProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from "../controllers";

const profileRouter = Router();

profileRouter.post("/profiles", addProfile);
profileRouter.get("/profiles", deleteProfile);
profileRouter.get("/profiles/:id", getProfile);
profileRouter.put("/profiles/:id", getProfiles);
profileRouter.delete("/profiles/:id", updateProfile);

export default profileRouter;
