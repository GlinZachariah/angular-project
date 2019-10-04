import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService, token } from '../main.service';
import { signIn, AlertMessage, Login ,signUpUserForm} from '../data.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formDataValue;
  data: signIn;
  alert:AlertMessage;
  jsonToken:string;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();
  
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: MainService,
    private http:HttpClient
  ) {
    this.formDataValue = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  checkUser(formData : signIn){
    let obs =this.authService.performAuth(formData);
    obs.subscribe((JSONResponse:token)=>{
      console.log("PUT call in success ", JSONResponse.token );
      // success user save token response in local storage
      localStorage.setItem("token","Bearer "+JSONResponse.token);
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', localStorage.getItem("token"));
      let newobs = this.http.get('/api/users/getRole/'+formData.username,{headers:headers,responseType:'text'});
      newobs.subscribe((role:string)=>{
          console.log("the role is "+role);

        if (role == 'user' || role == 'mentor' ) {
          this.authService.LoggedInRole = role;
          this.authService.isLoggedIn = true;
          this.authService.LoggedInUsername = formData.username;
          // this.authService.LoggedInFullname = JSONResponse.fullname;
          this.authService.LoggedInPwd = formData.password;
          if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'user') {
            this.route.navigate([this.authService.LoggedInRole, 'profile']);
            this.authService.isUserLoggedIn.next(true);
          } else if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'mentor') {
            this.route.navigate([this.authService.LoggedInRole, 'home']);
            this.authService.isUserLoggedIn.next(true);
          }
        }

      });
    },
    response => {
      this.alert={
        status:false,
        message :"Invalid Credentials"
      }
      this.LoginStatus.emit(this.alert);
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
    );

  }

  // checkUser(formData: signIn) {
  //   // this.authService.performAuth(formData);
    
    // let obs =this.authService.performAuth(formData);
    // obs.subscribe((JSONResponse: Login) => {
    //   console.log(JSONResponse);
    //   if (JSONResponse.auth === true) {
    //     this.authService.LoggedInRole = JSONResponse.role;
    //     this.authService.isLoggedIn = true;
    //     this.authService.LoggedInUsername = formData.username;
    //     this.authService.LoggedInFullname = JSONResponse.fullname;
    //     this.authService.LoggedInPwd = formData.password;
    //     if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'user') {
    //       this.route.navigate([this.authService.LoggedInRole, 'profile']);
    //       this.authService.isUserLoggedIn.next(true);
    //     } else if (this.authService.isLoggedIn && this.authService.LoggedInRole === 'mentor') {
    //       this.route.navigate([this.authService.LoggedInRole, 'home']);
    //       this.authService.isUserLoggedIn.next(true);
    //     } else {         
    //       console.log('LOGIN FAILED' + this.authService.isLoggedIn + this.authService.LoggedInRole);
    //     }
    //   }else{
    //     if(!this.authService.isLoggedIn){
    //       this.alert={
    //         status:false,
    //         message :"Invalid Credentials"
    //       }
    //       this.LoginStatus.emit(this.alert);
    //     }
    //   }
    // });
    
  //   this.formDataValue.reset();
  // }

  ngOnInit() {}

  
}
