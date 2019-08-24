import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { UpdateService } from 'src/app/services/update.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  oldLoggedUser;
  oldLoggedPwd;
  loggedUsername;
  loggedUser;
  loggedPwd;
  constructor(
    private authService: AuthService,
    private updateUser: UpdateService
  ) {
    if (authService.isLoggedIn) {
      this.oldLoggedUser = authService.LoggedInFullname;
      this.oldLoggedPwd = authService.LoggedInPwd;
      this.loggedUsername =authService.LoggedInUsername;
      this.loggedUser = this.oldLoggedUser;
      this.loggedPwd = this.oldLoggedPwd;
    }
  }

  updateProfile() {
    this.updateUser.updateProfile(this.loggedUser,this.oldLoggedPwd,this.loggedUsername, this.loggedPwd,this.loggedUsername);
  }

  ngOnInit() {
  }

}
