import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { AdminService } from '../services/admin.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  isAdminLoggedIn:boolean;
  UserRole;
  constructor(private route: Router, private checkAuth: AuthService,private adminAuth :AdminService) {
    this.checkAuth.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.isUserLoggedIn = true;
        this.UserRole = this.checkAuth.LoggedInRole;
      } else {
        this.isUserLoggedIn = false;
      }
    });
    if(!this.isUserLoggedIn){
      this.adminAuth.isAdminLogged.subscribe(value =>{
        if(value){
          this.UserRole='admin';
          this.isUserLoggedIn = true;
        }
      });
    }

  }

  Logout() {
    this.isUserLoggedIn = false;
    this.UserRole = null;
    console.log("Logout process");
    this.checkAuth.isLoggedIn= false;
    this.checkAuth.isUserLoggedIn.next(false);
  }
  ngOnInit() {}
}
