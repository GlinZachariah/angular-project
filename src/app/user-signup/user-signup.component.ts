import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder } from '@angular/forms';
import { signUpUserForm } from '../data.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signUpForm;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: MainService
  ) {
    this.signUpForm = this.formBuilder.group({
      username: '',
      password: '',
      fullname: '',
      role: 'user',
      accountStatus: 'unlocked'
    });
  }

  createUser(loginData: signUpUserForm) {
    // TODO subscribe to Service to see result of createUserAccount
    this.signUpService.createUserAccount(loginData);
    console.log("CreateUser Function Executed");
  }

  ngOnInit() {
  }

}
