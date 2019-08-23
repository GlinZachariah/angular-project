import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { signIn } from "../data/user.model";
import { Router } from '@angular/router';

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
      console.warn("CheckUser Function");
      this.authService.performAuth(this.data,this.route);
      this.authService.isUserLoggedIn.next(true);
      this.formDataValue.reset();
  }

  ngOnInit() {
  }

}
