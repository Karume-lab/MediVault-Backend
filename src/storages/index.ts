import { StableBTreeMap } from "azle";
import {
  HospitalProfile,
  MedicalRecord,
  PatientProfile,
  Profile,
  RequestAccess,
  User,
} from "../entities";

const UserStorage = StableBTreeMap<string, User>(0);
const PatientProfileStorage = StableBTreeMap<string, PatientProfile>(0);
const MedicalRecordStorage = StableBTreeMap<string, MedicalRecord>(0);
const RequestAccessStorage = StableBTreeMap<string, RequestAccess>(0);
const HospitalProfileStorage = StableBTreeMap<string, HospitalProfile>(0);
const ProfileStorage = StableBTreeMap<string, Profile>(0);

export {
  UserStorage,
  PatientProfileStorage,
  MedicalRecordStorage,
  RequestAccessStorage,
  HospitalProfileStorage,
  ProfileStorage,
};
