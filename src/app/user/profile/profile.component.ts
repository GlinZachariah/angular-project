import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  loggedPwd;
  constructor(
    private userService:MainService
  ) {
    if(this.userService.isLoggedIn){
      this.loggedUser = this.userService.LoggedInUsername;
      this.loggedPwd = this.userService.LoggedInPwd;
    }
  }

  updateProfile(){
    //TODO send POST request to change username and password and subscribe to obtain status
  }

  ngOnInit() {
  }

}
