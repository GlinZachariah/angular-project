import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MainService } from '../../main.service';
import { AlertMessage } from '../../data.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentorname:string;
  alert:AlertMessage;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();
  constructor(
    private authService:MainService
  ) {
    this.mentorname = authService.LoggedInUsername;
    if(this.authService.isLoggedIn){
      this.alert={
        status:true,
        message :"Login Success"
      }
      this.LoginStatus.emit(this.alert);
    }
   }

  ngOnInit() {
  }

}
