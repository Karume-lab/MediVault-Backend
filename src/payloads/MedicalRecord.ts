class MedicalRecordPayload {
  patientId: string;
  hospitalId: string;
  title: string;
  symptopms: string;
  medicationAdministered: string;
  description: string;
  diagnosis: string;
  amountPayed: Float32Array;
}

export default MedicalRecordPayload;
