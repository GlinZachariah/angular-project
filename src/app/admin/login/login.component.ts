import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInData;
  isLoggedIn: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: Router
  ) {
    this.signInData = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  checkAdmin(data){
    this.isLoggedIn = this.adminService.performAuth(data.username,data.password,this.route);
    this.signInData.reset();
  }

  ngOnInit() {}
}
