import { Injectable } from '@angular/core';
import { USER } from '../data/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  username:string;
  password:string;
  constructor() { }

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


  createCardDetails(){

  }

  updateCardDetails(){

  }

  
}
