import { Variant, text } from "azle";

const EntityError = Variant({
  EntityDoesNotExist: text,
  UnexpectedError: text,
});

export default EntityError;
