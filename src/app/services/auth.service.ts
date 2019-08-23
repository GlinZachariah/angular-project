import { Injectable } from '@angular/core';
import { USER } from '../data/mock-user';
import { signUpUser, signIn } from '../data/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: signUpUser;
  isLoggedIn: boolean;
  LoggedInUsername: string;
  LoggedInRole: string;
  testUsername: string;
  testPassword: string;
  currentURL;
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
    } else if (this.isLoggedIn && this.LoggedInRole === 'mentor') {
      route.navigate([this.LoggedInRole, 'home']);
    } else {
      console.log('Login Failed');
    }
  }
}
