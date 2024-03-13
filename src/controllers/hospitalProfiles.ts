import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { HospitalProfilePayload } from "../payloads";
import { HospitalProfile } from "../entities";
import { HospitalProfileStorage } from "../storages";

const addHospitalProfile = (
  req: Request<HospitalProfilePayload>,
  res: Response<HospitalProfile | any>
) => {
  try {
    const hospitalProfile: HospitalProfile = {
      id: uuid(),
      createdAt: timestampToDate(),
      updatedAt: null,
      ...req.body,
    };
    HospitalProfileStorage.insert(hospitalProfile.id, hospitalProfile);
    return res.status(200).json(hospitalProfile);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not add hospital profile" });
  }
};

const getHospitalProfile = (req: any, res: Response<HospitalProfile | any>) => {
  try {
    const hospitalProfileOpt = HospitalProfileStorage.get(req.params.id);
    if ("None" in hospitalProfileOpt) {
      return res
        .status(404)
        .json({ NotFound: "Hospital profile does not exist" });
    }
    return res.status(200).json(hospitalProfileOpt.Some);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get hospital profile" });
  }
};

const getHospitalProfiles = (req: Request, res: Response) => {
  try {
    const hospitalProfiles = HospitalProfileStorage.values();
    return res.status(200).json(hospitalProfiles);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get hospital profiles" });
  }
};

const updateHospitalProfile = (req: Request, res: Response) => {
  try {
    const hospitalProfileOpt = HospitalProfileStorage.get(req.params.id);
    if ("None" in hospitalProfileOpt) {
      return res
        .status(404)
        .json({ NotFound: "Hospital profile does not exist" });
    }
    const hospitalProfile: HospitalProfile = {
      ...hospitalProfileOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    HospitalProfileStorage.insert(hospitalProfile.id, hospitalProfile);
    return res.status(200).json(hospitalProfile);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get hospital profile" });
  }
};

const deleteHospitalProfile = (req: Request, res: Response) => {
  try {
    const deletedHospitalProfile = HospitalProfileStorage.remove(req.params.id);
    if ("None" in deletedHospitalProfile) {
      return res
        .status(404)
        .json({ NotFound: "Hospital profile does not exist" });
    } else {
      res.json(deletedHospitalProfile.Some);
    }
  } catch (error) {}
};

export { addHospitalProfile, getHospitalProfile, getHospitalProfiles, updateHospitalProfile, deleteHospitalProfile };
