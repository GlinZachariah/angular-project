import { Injectable } from '@angular/core';
import { ADMIN } from '../data/mock-admin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { USER } from '../data/mock-user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn:boolean =false;
  isAdminLogged:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  performAuth(username,password,route){
    if(username == ADMIN.username && password == ADMIN.password){
      this.adminLoggedIn = true;
      route.navigate(['admin', 'permission']);
      this.isAdminLogged.next(true);

    }else{
      this.isAdminLogged.next(false);
    }
    return this.adminLoggedIn;
  }


  updateUserPermission(data,route){
    console.log(data);
    var result;
    if(data.accountStatus == 'locked'){
      USER[data.userIdx].credential.accountStatus ='unlocked';
      result ='unlocked';
    }else{
      USER[data.userIdx].credential.accountStatus ='locked';
      result='locked';
    }
    return result;
  }

}
