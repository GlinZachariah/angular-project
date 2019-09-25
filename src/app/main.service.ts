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
    const  headers = new HttpHeaders().set("Content-Type", "application/json").set("Access-Control-Allow-Origin","*");
    
    this.signUpUserObj = {
      fullname: loginData.fullname,
      accountStatus: loginData.accountStatus,
      role: loginData.role,
      username: loginData.username,
      password: loginData.password
    };
    console.log("===================>Executed here");
    // this.http.post("http://localhost:8081/users/signUpUser",this.signUpUserObj,{headers});
    
      this.http.post("http://localhost:8081/api/users/signUpUser",this.signUpUserObj,{headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
    .subscribe(
      val => {
          console.log("PUT call successful value returned in body", 
                      val);
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
  );
    //  TODO send signUpUSerObject via HTTP POST and return status;
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
