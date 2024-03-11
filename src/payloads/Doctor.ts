import { Record, text } from "azle";

const DoctorPayload = Record({
  first_name: text,
  last_name: text,
  phoneNumber: text,
  email: text,
});

export default DoctorPayload;
