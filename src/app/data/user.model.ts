export interface signIn {
  username: string;
  password: string;
}

export interface signInUser {
  role: string;
  auth: signIn;
}

export class signUpUserForm {
  fullname: string;
  role: string;
  username: string;
  password: string;
}

export interface signUpUser {
  credential: signInUser;
  fullname: string;
}
