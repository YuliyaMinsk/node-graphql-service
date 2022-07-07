export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}
