import { Router } from "express";
import {
  addHospitalProfile,
  getHospitalProfile,
  getHospitalProfiles,
  updateHospitalProfile,
  deleteHospitalProfile,
} from "../controllers";

const hospitalProfileRouter = Router();

hospitalProfileRouter.post("/hospital-profiles", addHospitalProfile);
hospitalProfileRouter.get("/hospital-profiles", getHospitalProfiles);
hospitalProfileRouter.get("/hospital-profiles/:id", getHospitalProfile);
hospitalProfileRouter.put("/hospital-profiles/:id", updateHospitalProfile);
hospitalProfileRouter.delete("/hospital-profiles/:id", deleteHospitalProfile);

export default hospitalProfileRouter;
