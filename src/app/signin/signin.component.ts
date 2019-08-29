import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { signIn } from "../data/user.model";
import { Router } from '@angular/router';
import { Login } from '../data/final-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formDataValue;
  data:signIn;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private route:Router
  ) {
    this.formDataValue = this.formBuilder.group({
      username:'',
      password : ''
    });
  }

  checkUser(formData:signIn){

    this.data = formData;
    this.authService.performAuth(this.data,this.route).subscribe((JSONResponse:Login) =>{
      console.log(JSONResponse);
      if(JSONResponse[0].auth === true){
        this.authService.LoggedInRole = JSONResponse[0].role;
        this.authService.isLoggedIn = true;
        this.authService.LoggedInUsername = this.data.username;
        this.authService.LoggedInFullname = JSONResponse[0].fullname;
        this.authService.LoggedInPwd = this.data.password;
        if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'user') {
          this.route.navigate([this.authService.LoggedInRole, 'profile']);
          this.authService.isUserLoggedIn.next(true);

        } else if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'mentor') {
          this.route.navigate([this.authService.LoggedInRole, 'home']);
          this.authService.isUserLoggedIn.next(true);
        } else{
          console.log(''+this.authService.isLoggedIn+ this.authService.LoggedInRole);
        }
      }
    });

    this.formDataValue.reset();
  }

  ngOnInit() {
  }

}
