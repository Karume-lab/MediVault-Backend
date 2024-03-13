import { Router } from "express";
import {
  addDoctor,
  deleteDoctor,
  getDoctor,
  getDoctors,
  updateDoctor,
} from "../controllers";

const doctorRouter = Router();

doctorRouter.post("/doctors", addDoctor);
doctorRouter.get("/doctors/:id", getDoctor);
doctorRouter.get("/doctors", getDoctors);
doctorRouter.put("/doctors/:id", updateDoctor);
doctorRouter.delete("/doctors/:id", deleteDoctor);

export default doctorRouter;
