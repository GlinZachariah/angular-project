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
    let obs;
    obs = this.http.get('assets/admin.json');
    obs.subscribe(data => {
      if (data[0].auth == true) {
        this.adminLoggedIn = true;
        route.navigate(['admin', 'permission']);
        this.isAdminLogged.next(true);
      } else {
        this.adminLoggedIn = false;
      }
    });
    return this.adminLoggedIn;
  }
}
