import { RequestAccessStatus } from "../entities";

class RequestAccessPayload {
  patientProfileId: string;
  HospitalProfileId: string;
  status: RequestAccessStatus;
}

export default RequestAccessPayload;
