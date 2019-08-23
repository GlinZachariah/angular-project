import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  userSection: boolean;
  mentorSection: boolean;
  defaultSection: boolean;
  UserRole;
  constructor(private route: Router, private checkAuth: AuthService) {
    // if(this.checkAuth.isLoggedIn){
    //   this.isUserLoggedIn = true;
    //   this.UserRole = this.checkAuth.LoggedInRole;
    // }else{
    //   this.isUserLoggedIn=false;
    // }
    this.checkAuth.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.isUserLoggedIn = true;
        this.UserRole = this.checkAuth.LoggedInRole;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  Logout(){
    this.isUserLoggedIn = false;
    this.UserRole = null;
    console.log("Logout process");
    this.checkAuth.isUserLoggedIn.next(false);
  }
  ngOnInit() {}
}
