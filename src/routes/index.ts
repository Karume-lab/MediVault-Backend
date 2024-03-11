import {
  None,
  Ok,
  Opt,
  Record,
  StableBTreeMap,
  Variant,
  ic,
  nat64,
  text,
} from "azle";
import { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

const Doctor = Record({
  id: text,
  first_name: text,
  last_name: text,
  email: text,
  phoneNumber: text,
  // createdAt: nat64,
  // updatedAt: Opt(nat64),
});

type doctorType = typeof Doctor.tsType;

const DoctorPayload = Record({
  first_name: text,
  last_name: text,
  phoneNumber: text,
  email: text,
});

type doctorPayloadType = typeof DoctorPayload.tsType;

const DoctorError = Variant({
  DoctorDoesNotExist: text,
  UnexpectedError: text,
});

type doctorErrorType = typeof DoctorError.tsType;

const DoctorStorage = StableBTreeMap<text, doctorType>(0);

router.post("/doctors", (req: Request<doctorPayloadType>, res: Response) => {
  const doctor: doctorType = {
    id: uuidv4(),
    // updatedAt: None,
    // createdAt: ic.time(),
    ...req.body,
  };
  DoctorStorage.insert(doctor.id, doctor);
  return res.status(201).json(doctor);
});
router.get("/doctors", (req: Request, res: Response) => {
  return res.status(200).json({"doctors": "Ok(DoctorStorage.values())"});
});
router.get("/doctors/:id", (req: Request, res: Response) => {
  return res.status(200).send("Hello World");
});
router.put("/doctors/:id", (req: Request, res: Response) => {
  return res.status(200).send("Hello World");
});
router.delete("/doctors/:id", (req: Request, res: Response) => {
  return res.status(200).send("Hello World");
});

export default router;
