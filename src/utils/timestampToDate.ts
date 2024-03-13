import { ic } from "azle";

const timestampToDate = () => {
  const timestamp = new Number(ic.time());

  return new Date(timestamp.valueOf() / 1000_000);
};

export default timestampToDate;
