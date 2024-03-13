import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { ProfilePayload } from "../payloads";
import { Profile } from "../entities";
import { ProfileStorage } from "../storages";

const addProfile = (
  req: Request<ProfilePayload>,
  res: Response<Profile | any>
) => {
  try {
    const profile: Profile = {
      id: uuid(),
      createdAt: timestampToDate(),
      updatedAt: null,
      ...req.body,
    };
    ProfileStorage.insert(profile.id, profile);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not add profile" });
  }
};

const getProfile = (req: any, res: Response<Profile | any>) => {
  try {
    const profileOpt = ProfileStorage.get(req.params.id);
    if ("None" in profileOpt) {
      return res.status(404).json({ NotFound: "Profile does not exist" });
    }
    return res.status(200).json(profileOpt.Some);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get profile" });
  }
};

const getProfiles = (req: Request, res: Response) => {
  try {
    const profiles = ProfileStorage.values();
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get users" });
  }
};

const updateProfile = (req: Request, res: Response) => {
  try {
    const profileOpt = ProfileStorage.get(req.params.id);
    if ("None" in profileOpt) {
      return res.status(404).json({ NotFound: "Profile does not exist" });
    }
    const profile: Profile = {
      ...profileOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    ProfileStorage.insert(profile.id, profile);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get profile" });
  }
};

const deleteProfile = (req: Request, res: Response) => {
  try {
    const deletedProfile = ProfileStorage.remove(req.params.id);
    if ("None" in deletedProfile) {
      return res.status(404).json({ NotFound: "Profile does not exist" });
    } else {
      res.json(deletedProfile.Some);
    }
  } catch (error) {}
};

export { addProfile, getProfile, getProfiles, updateProfile, deleteProfile };
