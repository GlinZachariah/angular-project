import { Injectable } from '@angular/core';
import { USER } from '../data/mock-user';
import { signUpUser, signIn } from '../data/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: signUpUser;
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoggedIn: boolean;
  LoggedInUsername: string;
  LoggedInFullname: string;
  LoggedInRole: string;
  LoggedInPwd:string;
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData: signIn, route: Router) {
    //TODO send Credentials with POST request
    if ((loginData.password === 'n', loginData.username === 'n')) {
      return this.http.get('assets/auth.json');
    }
  }
}
