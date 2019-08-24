import { Injectable } from "@angular/core";
import { signUpUser, signUpUserForm } from "../data/user.model";
import { USER } from "../data/mock-user";
@Injectable({
  providedIn: "root"
})
export class SignupService {
  signUpUserObj: signUpUser;
  constructor() {}

  createUserAccount(loginData: signUpUserForm) {
    this.signUpUserObj = {
      fullname: loginData.fullname,
      credential: {
        role: loginData.role,
        auth: {
          username: loginData.username,
          password: loginData.password
        }
      }
    };

    USER.push(this.signUpUserObj);
    USER.forEach(user => {
      console.log(user.fullname + " : " + user.credential.role);
    });
  }
}
