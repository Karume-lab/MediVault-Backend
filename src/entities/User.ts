class User {
  id: string;
  profileId: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export default User;
