import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInData;
  constructor(
    private formBuilder:FormBuilder
  ) {
    // this.signInData = this.formBuilder.group({
    //   username='',
    //   password=''
    // });
  }

  ngOnInit() {
  }

}
