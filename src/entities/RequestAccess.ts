enum RequestAccessStatus {
  Pending,
  Approved,
  Rejected,
}

class RequestAccess {
  id: string;
  patientProfileId: string;
  HospitalProfileId: string;
  status: RequestAccessStatus;
  createdAt: Date;
  updatedAt: Date | null;
}

export { RequestAccess, RequestAccessStatus };
