import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentorname:string;
  constructor(
    private authService:MainService
  ) {
    this.mentorname = authService.LoggedInUsername;
   }

  ngOnInit() {
  }

}
