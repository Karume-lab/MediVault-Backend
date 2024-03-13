import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { PatientProfilePayload } from "../payloads";
import { PatientProfile } from "../entities";
import { PatientProfileStorage } from "../storages";

const addPatientProfile = (
  req: Request<PatientProfilePayload>,
  res: Response<PatientProfile | any>
) => {
  try {
    const patientProfile: PatientProfile = {
      id: uuid(),
      createdAt: timestampToDate(),
      updatedAt: null,
      ...req.body,
    };
    PatientProfileStorage.insert(patientProfile.id, patientProfile);
    return res.status(200).json(patientProfile);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not add patient profile" });
  }
};

const getPatientProfile = (req: any, res: Response<PatientProfile | any>) => {
  try {
    const patientProfileOpt = PatientProfileStorage.get(req.params.id);
    if ("None" in patientProfileOpt) {
      return res.status(404).json({ NotFound: "User does not exist" });
    }
    return res.status(200).json(patientProfileOpt.Some);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get patient profile" });
  }
};

const getPatientProfiles = (req: Request, res: Response) => {
  try {
    const patientProfiles = PatientProfileStorage.values();
    return res.status(200).json(patientProfiles);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get patient profiles" });
  }
};

const updatePatientProfile = (req: Request, res: Response) => {
  try {
    const userOpt = PatientProfileStorage.get(req.params.id);
    if ("None" in userOpt) {
      return res.status(404).json({ NotFound: "User does not exist" });
    }
    const patientProfile: PatientProfile = {
      ...userOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    PatientProfileStorage.insert(patientProfile.id, patientProfile);
    return res.status(200).json(patientProfile);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get patient profile" });
  }
};

const deletePatientProfile = (req: Request, res: Response) => {
  try {
    const deletedPatientProfile = PatientProfileStorage.remove(req.params.id);
    if ("None" in deletedPatientProfile) {
      return res
        .status(404)
        .json({ NotFound: "Patient profile does not exist" });
    } else {
      res.json(deletedPatientProfile.Some);
    }
  } catch (error) {}
};

export {
  addPatientProfile,
  getPatientProfile,
  getPatientProfiles,
  updatePatientProfile,
  deletePatientProfile,
};
