import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { MedicalRecordPayload } from "../payloads";
import { MedicalRecord } from "../entities";
import { MedicalRecordStorage } from "../storages";

const addMedicalRecord = (
  req: Request<MedicalRecordPayload>,
  res: Response<MedicalRecord | any>
) => {
  try {
    const medicalRecord: MedicalRecord = {
      id: uuid(),
      createdAt: timestampToDate(),
      ...req.body,
    };
    MedicalRecordStorage.insert(medicalRecord.id, medicalRecord);
    return res.status(200).json(medicalRecord);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not add medical record" });
  }
};

const getMedicalRecord = (req: any, res: Response<MedicalRecord | any>) => {
  try {
    const medicalRecordOpt = MedicalRecordStorage.get(req.params.id);
    if ("None" in medicalRecordOpt) {
      return res
        .status(404)
        .json({ NotFound: "Medical record does not exist" });
    }
    return res.status(200).json(medicalRecordOpt.Some);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get medical record" });
  }
};

const getMedicalRecords = (req: Request, res: Response) => {
  try {
    const medicalRecords = MedicalRecordStorage.values();
    return res.status(200).json(medicalRecords);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get medical records" });
  }
};

const updateMedicalRecord = (req: Request, res: Response) => {
  try {
    const medicalRecordOpt = MedicalRecordStorage.get(req.params.id);
    if ("None" in medicalRecordOpt) {
      return res
        .status(404)
        .json({ NotFound: "Medical record does not exist" });
    }
    const medicalRecord: MedicalRecord = {
      ...medicalRecordOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    MedicalRecordStorage.insert(medicalRecord.id, medicalRecord);
    return res.status(200).json(medicalRecord);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get medical record" });
  }
};

const deleteMedicalRecord = (req: Request, res: Response) => {
  try {
    const deletedMedicalRecord = MedicalRecordStorage.remove(req.params.id);
    if ("None" in deleteMedicalRecord) {
      return res
        .status(404)
        .json({ NotFound: "Medical record does not exist" });
    } else {
      res.json(deletedMedicalRecord.Some);
    }
  } catch (error) {}
};

export {
  addMedicalRecord,
  getMedicalRecord,
  getMedicalRecords,
  updateMedicalRecord,
  deleteMedicalRecord,
};
