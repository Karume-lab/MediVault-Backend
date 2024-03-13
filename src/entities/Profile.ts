class Profile {
  id: string;
  userId: string;
  patientProfileId: string | null;
  hospitalProfileId: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export default Profile;
