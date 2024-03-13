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
profileRouter.get("/profiles", getProfiles);
profileRouter.get("/profiles/:id", getProfile);
profileRouter.put("/profiles/:id", updateProfile);
profileRouter.delete("/profiles/:id", deleteProfile);

export default profileRouter;
