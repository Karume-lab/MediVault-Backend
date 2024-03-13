import { Router } from "express";
import {
  addRequestAccess,
  getRequestAccess,
  getRequestAccesses,
  updateRequestAccess,
  deleteRequestAccess,
} from "../controllers";

const requestAccessRouter = Router();

requestAccessRouter.post("/request-access", addRequestAccess);
requestAccessRouter.get("/request-access", getRequestAccesses);
requestAccessRouter.get("/request-access/:id", getRequestAccess);
requestAccessRouter.put("/request-access/:id", updateRequestAccess);
requestAccessRouter.delete("/request-access/:id", deleteRequestAccess);

export default requestAccessRouter;
