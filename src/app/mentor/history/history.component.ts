import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { MentorHistory } from "../../data.model";
import { MainService } from "../../main.service";
import { TimeslotPipe } from "../timeslot.pipe";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
   mentorHistoryData:MentorHistory[];
  constructor(
    private authService:MainService,
    private mentorService:MentorService
  ) { 
    if(this.authService.isLoggedIn){
      this.mentorService.getCourseHistory().subscribe((data:MentorHistory[])=>{
        this.mentorHistoryData = data;
      })
    }
  }

  ngOnInit() {
  }

}
