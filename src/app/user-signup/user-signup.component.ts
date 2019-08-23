import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SignupService } from "../services/signup.service";
import {} from "../services/signup.service";
import { signUpUserForm,signUpUser } from "../data/user.model";

@Component({
  selector: "app-user-signup",
  templateUrl: "./user-signup.component.html",
  styleUrls: ["./user-signup.component.css"]
})
export class UserSignupComponent implements OnInit {
  signUpForm;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignupService
  ) {
    this.signUpForm = this.formBuilder.group({
      username:'',
      password:'',
      fullname:'',
      role:'user'
    });
  }

  createUser(loginData:signUpUserForm) {
    //console.log(loginData);
    this.signUpService.createUserAccount(loginData);
  }

  ngOnInit() {}
}
