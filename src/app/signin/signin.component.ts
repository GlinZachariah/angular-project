import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { signIn } from '../data.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formDataValue;
  data: signIn;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: MainService
  ) {
    this.formDataValue = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  checkUser(formData: signIn) {
    this.authService.performAuth(formData, this.route);
  }

  ngOnInit() {}
}
