import { Doctor } from "../entities";
import EntityError from "../entities/EntityError";
import { DoctorPayload } from "../payloads";

type doctorType = typeof Doctor.tsType;
type doctorPayloadType = typeof DoctorPayload.tsType;
type entityErrorType = typeof EntityError.tsType;

export { doctorType, doctorPayloadType, entityErrorType };
