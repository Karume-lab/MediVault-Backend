class MedicalRecord {
  id: string;
  title: string;
  patientId: string;
  hospitalId: string;
  symptopms: string;
  medicationAdministered: string;
  description: string;
  diagnosis: string;
  amountPayed: Float32Array;
  createdAt: Date;
}

export default MedicalRecord;
