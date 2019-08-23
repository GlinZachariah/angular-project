import { Injectable } from '@angular/core';
import { USER } from '../data/mock-user';
import { signUpUser, signIn } from '../data/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: signUpUser;
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn: boolean;
  LoggedInUsername: string;
  LoggedInRole: string;
  LoggedInPwd:string;
  testUsername: string;
  testPassword: string;
  userBlock:boolean;
  mentorBlock:boolean;
  defaultBlock:boolean;
  userChecked:boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  performAuth(loginData: signIn, route: Router) {
    console.log("performAuth Function");
    USER.forEach(user => {
      this.testUsername = user.credential.auth.username;
      this.testPassword = user.credential.auth.password;
      console.log('Login Sucess :: '+user.fullname+ '::'+user.credential.role);
      if (!this.isLoggedIn) {
        if (
          this.testPassword === loginData.password &&
          this.testUsername === loginData.username 
        ) {
          console.warn("LOGGED IN SUCEESS");
          this.LoggedInUsername = user.fullname;
          this.LoggedInRole = user.credential.role;
          this.LoggedInPwd = loginData.password;
          this.isLoggedIn = true;
        }
      }
    });
    if (this.isLoggedIn && this.LoggedInRole == 'user') {
      route.navigate([this.LoggedInRole, 'profile']);
      this.userBlock =true;
      this.mentorBlock =false;
      this.defaultBlock =false;
    } else if (this.isLoggedIn && this.LoggedInRole == 'mentor') {
      route.navigate([this.LoggedInRole, 'home']);
      this.userBlock =false;
      this.mentorBlock =true;
      this.defaultBlock =false;
    } else{
      console.log('Login Failed');
      this.userBlock =false;
      this.mentorBlock =false;
      this.defaultBlock =true;
    }
  }


}
