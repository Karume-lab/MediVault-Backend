import { Opt, Record, nat64, text } from "azle";

const Doctor = Record({
  id: text,
  first_name: text,
  last_name: text,
  email: text,
  phoneNumber: text,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

export default Doctor;
