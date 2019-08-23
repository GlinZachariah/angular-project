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
  testUsername: string;
  testPassword: string;
  userBlock:boolean;
  mentorBlock:boolean;
  defaultBlock:boolean;
  constructor() {}

  performAuth(loginData: signIn, route: Router) {
    this.isLoggedIn = false;
    console.warn(route.getCurrentNavigation);
    USER.forEach(user => {
      this.testUsername = user.credential.auth.username;
      console.warn(
        'testUsername ' + this.testUsername + ' : ' + loginData.username
      );
      this.testPassword = user.credential.auth.password;
      if (!this.isLoggedIn) {
        if (
          this.testPassword === loginData.password &&
          this.testUsername === loginData.username
        ) {
          console.warn('Login Sucess');
          this.LoggedInUsername = user.fullname;
          this.LoggedInRole = user.credential.role;
          this.isLoggedIn = true;
        }
      }
    });
    if (this.isLoggedIn && this.LoggedInRole === 'user') {
      route.navigate([this.LoggedInRole, 'profile']);
      this.userBlock =true;
      this.mentorBlock =false;
      this.defaultBlock =false;
    } else if (this.isLoggedIn && this.LoggedInRole === 'mentor') {
      route.navigate([this.LoggedInRole, 'home']);
      this.userBlock =false;
      this.mentorBlock =true;
      this.defaultBlock =false;
    } else {
      console.log('Login Failed');
      this.userBlock =false;
      this.mentorBlock =false;
      this.defaultBlock =true;
    }
  }
}
