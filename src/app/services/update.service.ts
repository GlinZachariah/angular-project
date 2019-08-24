import { Injectable } from '@angular/core';
import { USER } from '../data/mock-user';
import { COMPLETED } from "../data/mock-user";
import { TrainingCompleted } from '../data/user.model';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  username:string;
  password:string;
  resultData:TrainingCompleted[]
  constructor() {
    this.resultData=[];
   }

  updateProfile(fname,oldpwd,name,pwd,userId){

    USER.forEach(user => {
      this.username = user.credential.auth.username;
      this.password = user.credential.auth.password;
      if(userId == this.username && oldpwd == this.password ){
        user.credential.auth.username=name;
        user.credential.auth.password =pwd;
        user.fullname = fname;
      }
    });
    // console.warn("Update Profile");
  }

  getTrainingsCompleted(user){

    COMPLETED.forEach(users => {
      if(users.username == user){
        this.resultData.push(users);
      }
    });
    return this.resultData;
  }


}
