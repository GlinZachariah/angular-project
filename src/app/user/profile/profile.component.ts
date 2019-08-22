import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  constructor(
    private authService:AuthService
  ) {
    if(authService.isLoggedIn){
      this.loggedUser = authService.LoggedInUsername;
    }
  }

  ngOnInit() {
  }

}
