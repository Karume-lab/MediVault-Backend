import { Router } from "express";
import {
  addMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecord,
  getMedicalRecords,
  updateMedicalRecord,
} from "../controllers";

const medicalRecordRouter = Router();

medicalRecordRouter.post("/medical-records", addMedicalRecord);
medicalRecordRouter.get("/medical-records", getMedicalRecords);
medicalRecordRouter.get("/medical-records/:id", getMedicalRecord);
medicalRecordRouter.put("/medical-records/:id", updateMedicalRecord);
medicalRecordRouter.delete("/medical-records/:id", deleteMedicalRecord);

export default medicalRecordRouter;
