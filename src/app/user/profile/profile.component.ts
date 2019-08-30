import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  loggedPwd;
  cardDetailsValue;
  cardDetails;
  editDetails;
  constructor(
    private authService:MainService,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) {
    if(this.authService.isLoggedIn){
      this.loggedUser = this.authService.LoggedInUsername;
      this.loggedPwd = this.authService.LoggedInPwd;
      // TODO save the getcardDetails value into the cardDetailsValue property and display if null dont update
      this.userService.getCardDetails();

      this.cardDetails = this.formBuilder.group({
        cardNumber:'',
        cardExpM:'',
        cardExpY:'',
        cardCV:''
      });

      this.editDetails = this.formBuilder.group({
        fullname:'',
        password:''
      });
    }
  }

  updateProfile(){
    //TODO send POST request to change username and password and subscribe to obtain status
  }

  saveCardDetails(){
     //TODO send POST request to change username and password and subscribe to obtain status
  }

  ngOnInit() {
  }

}
