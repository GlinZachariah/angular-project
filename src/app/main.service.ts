import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, signUpUserForm, MentorModel, Technology, SearchRequestModel, signIn } from './data.model';


export interface token{
  token:string;
}

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

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', localStorage.getItem("token"));
  flag= 0;
  // baseUrl ="http://localhost:8081"
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData:signIn):Observable<token> {
    return this.http.post<token>('/api/users/performAuth',loginData);
  }

  // performAuth(loginData) :Observable<Login>{
  //   return this.http.post<Login>('/api/users/performAuth',loginData);
  // }

  // performAuth(loginData){
  //   return this.http.post(`${this.baseUrl}`+'/users/performAuth',loginData);
  // }

  createUserAccount(loginData: signUpUserForm) {

    this.signUpUserObj = {
      fullName: loginData.fullName,
      accountStatus: loginData.accountStatus,
      userRole: loginData.userRole,
      userName: loginData.userName,
      userPassword: loginData.userPassword
    };

    
      let obs= this.http.post<signUpUserForm>('/api/users/signUpUser',this.signUpUserObj,{headers:this.headers});
      obs.subscribe();
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
      
  }


  getTechData():Observable<Technology[]>{
    return  this.http.get<Technology[]>('/api/admin/getTechnologies',{headers:this.headers});
  }

  createMentorAccount(mentorCreateData){
    this.http.post('/api/mentor/signUp',mentorCreateData,{headers:this.headers}).subscribe();
  }

  searchTrainings(formData){
    //  TODO send mentorCreateData via HTTP POST and return status;
    
    return this.http.post('/api/users/searchCourse',formData,{headers:this.headers});
  }

  updateTraining(progressData){
    let obs= this.http.put('/api/users/updateProgressTraining',progressData,{headers:this.headers});
    obs.subscribe();
  }


}
