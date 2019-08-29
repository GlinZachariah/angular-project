import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, signUpUserForm, Technology } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoggedIn: boolean;
  LoggedInUsername: string;
  LoggedInFullname: string;
  LoggedInRole: string;
  LoggedInPwd: string;
  signUpUserObj: signUpUserForm;
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData, route: Router) {
    //TODO send Credentials with POST request
    let obs;
    if (loginData.password === 'mentor' && loginData.username === 'mentor') {
      obs = this.http.get('assets/mentorAuth.json');
    } else if (loginData.password === 'user' && loginData.username === 'user') {
      obs = this.http.get('assets/userAuth.json');
    }
    obs.subscribe((JSONResponse: Login) => {
      if (JSONResponse[0].auth === true) {
        this.LoggedInRole = JSONResponse[0].role;
        this.isLoggedIn = true;
        this.LoggedInUsername = loginData.username;
        this.LoggedInFullname = JSONResponse[0].fullname;
        this.LoggedInPwd = loginData.password;
        if (this.isLoggedIn && this.LoggedInRole == 'user') {
          route.navigate([this.LoggedInRole, 'profile']);
          this.isUserLoggedIn.next(true);
        } else if (this.isLoggedIn && this.LoggedInRole === 'mentor') {
          route.navigate([this.LoggedInRole, 'home']);
          this.isUserLoggedIn.next(true);
        } else {
          console.log('LOGIN FAILED' + this.isLoggedIn + this.LoggedInRole);
        }
      }
    });
  }

  createUserAccount(loginData: signUpUserForm) {
    this.signUpUserObj = {
      fullname: loginData.fullname,
      accountStatus: loginData.accountStatus,
      role: loginData.role,
      username: loginData.username,
      password: loginData.password
    };

    //  TODO send signUpUSerObject via HTTP POST and return status;
  }


  getTechData(){
    return  this.http.get('assets/technologies.json');
  }

  createMentorAccount(mentorCreateData,signUpData, materialTypeData){
    //  TODO send mentorCreateData via HTTP POST and return status; add to createUserAccount table also
  }


}
