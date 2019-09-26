import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  flag= 0;
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData) {
    //TODO send Credentials with POST request
    
    if (loginData.password === 'mentor' && loginData.username === 'mentor@learnapp') {
     return  this.http.get('assets/mentorAuth.json');
    } else if (loginData.password === 'user' && loginData.username === 'user@learnapp') {
      return this.http.get('assets/userAuth.json');
    }else{
      return this.http.get('assets/failAuth.json');
    }

  }

  createUserAccount(loginData: signUpUserForm) {

    this.signUpUserObj = {
      fullName: loginData.fullName,
      accountStatus: loginData.accountStatus,
      userRole: loginData.userRole,
      userName: loginData.userName,
      userPassword: loginData.userPassword
    };

    
      let obs= this.http.post<signUpUserForm>('/api/users/signUpUser',this.signUpUserObj);
      // obs.subscribe(
      //   val => {
      //       console.log("PUT call successful value returned in body", val);
      //   },
      //   response => {
      //       console.log("PUT call in error", response );
      //   },
      //   () => {
      //       console.log("The PUT observable is now completed.");
      //   }
      // );
      obs.subscribe();
  }


  getTechData(){
    return  this.http.get('assets/technologies.json');
  }

  createMentorAccount(mentorCreateData,signUpData, materialTypeData){
    //  TODO send mentorCreateData via HTTP POST and return status; add to createUserAccount table also
  }

  searchTrainings(formData){
    //  TODO send mentorCreateData via HTTP POST and return status;
    return this.http.get("assets/search-result.json");
  }


}
