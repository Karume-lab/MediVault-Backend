import {
  Canister,
  Err,
  None,
  Ok,
  Result,
  Some,
  Vec,
  ic,
  query,
  text,
  update,
} from "azle";
import { v4 as uuidv4 } from "uuid";
import { Doctor } from "../entities";
import { DoctorStorage } from "../storages";
import { DoctorPayload } from "../payloads";
import { doctorPayloadType, doctorType } from "../types";
import EntityError from "../entities/EntityError";

export default Canister({
  tester: query([], text, () => {
    return "Another ...";
  }),
  getDoctors: query([], Vec(Doctor), () => {
    return DoctorStorage.values();
  }),

  addDoctor: update(
    [DoctorPayload],
    Result(Doctor, EntityError),
    (payload: doctorPayloadType) => {
      try {
        const doctor: doctorType = {
          id: uuidv4(),
          createdAt: ic.time(),
          updatedAt: None,
          ...payload,
        };
        DoctorStorage.insert(doctor.id, doctor);
        return Ok(doctor);
      } catch (error) {
        return Err({ UnexpectedError: "Could not create doctor" });
      }
    }
  ),

  updateDoctor: update(
    [text, DoctorPayload],
    Result(Doctor, EntityError),
    (id: text, payload: doctorPayloadType) => {
      try {
        const doctorOpt = DoctorStorage.get(id);
        if ("None" in doctorOpt) {
          return Err({ EntityDoesNotExist: "Doctor does not exist" });
        }
        const cleanedPayload = Object.fromEntries(
          Object.entries(payload).filter(([_, value]) => value !== "")
        );
        doctorOpt.Some.updatedAt = Some(ic.time());
        doctorOpt.Some = {
          ...doctorOpt.Some,
          ...cleanedPayload,
        };

        DoctorStorage.insert(doctorOpt.Some.id, doctorOpt.Some);
        return Ok(doctorOpt.Some);
      } catch (error) {
        return Err({ UnexpectedError: "Could not update doctor" });
      }
    }
  ),

  deleteDoctor: update([text], Result(Doctor, EntityError), (id: text) => {
    try {
      const doctorOpt = DoctorStorage.remove(id);
      if ("None" in doctorOpt) {
        return Err({ EntityDoesNotExist: "Doctor does not exist" });
      }
      return Ok(doctorOpt.Some);
    } catch (error) {
      return Err({ UnexpectedError: "Could not delete doctor" });
    }
  }),
});
