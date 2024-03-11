import { StableBTreeMap, text } from "azle";
import { doctorType } from "../types";

const DoctorStorage = StableBTreeMap<text, doctorType>(0);

export { DoctorStorage };
