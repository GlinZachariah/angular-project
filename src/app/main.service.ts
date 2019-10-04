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

  
  flag= 0;
  // baseUrl ="http://localhost:8081"
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData:signIn) :string{
    let obs= this.http.post<token>('/api/users/performAuth',loginData);
    obs.subscribe((JSONResponse:token)=>{
      console.log("PUT call in success", JSONResponse.token );
      // success user save token response in local storage
      // getUserRole
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
          headers = headers.set('authorization', 'Bearer ' + JSONResponse.token);
      let newobs = this.http.get('/api/users/getRole/'+loginData.username,{headers,responseType: 'text'});
      newobs.subscribe((role:string)=>{return role;});
    },
    response => {
          console.log("PUT call in error", response );
          return 'invalid';
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
    );
    return 'undefined';
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

    
      let obs= this.http.post<signUpUserForm>('/api/users/signUpUser',this.signUpUserObj);
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
    return  this.http.get<Technology[]>('/api/admin/getTechnologies');
  }

  createMentorAccount(mentorCreateData){
    this.http.post('/api/mentor/signUp',mentorCreateData).subscribe();
  }

  searchTrainings(formData){
    //  TODO send mentorCreateData via HTTP POST and return status;
    
    return this.http.post('/api/users/searchCourse',formData);
  }

  updateTraining(progressData){
    let obs= this.http.put('/api/users/updateProgressTraining',progressData);
    obs.subscribe();
  }


}
