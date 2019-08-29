import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import {} from '../services/signup.service';
import { signUpUserForm } from '../data/final-model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signUpForm;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignupService
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
  }

  ngOnInit() {}
}
