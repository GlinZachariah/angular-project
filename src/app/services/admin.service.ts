import { Injectable } from '@angular/core';
import { ADMIN } from '../data/mock-admin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


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
}
