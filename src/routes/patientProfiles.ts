import { Router } from "express";
import {
  addPatientProfile,
  getPatientProfile,
  getPatientProfiles,
  updatePatientProfile,
  deletePatientProfile,
} from "../controllers";

const patientProfileRouter = Router();

patientProfileRouter.post("/patient-profiles", addPatientProfile);
patientProfileRouter.get("/patient-profiles", getPatientProfiles);
patientProfileRouter.get("/patient-profiles/:id", getPatientProfile);
patientProfileRouter.put("/patient-profiles/:id", updatePatientProfile);
patientProfileRouter.delete("/patient-profiles/:id", deletePatientProfile);

export default patientProfileRouter;
