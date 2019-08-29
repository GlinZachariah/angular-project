import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn = false;
  isAdminLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataGen;
  constructor(private http: HttpClient) {}

  performAuth(username, password, route) {
    //TODO send POST to performAuth and return the status
    return this.http.get('assets/admin.json');
  }
}
