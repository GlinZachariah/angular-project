import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { MentorHistory } from "../../data.model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
   mentorHistoryData:MentorHistory[];
  constructor(
    private mentorService:MentorService
  ) { 
    this.mentorService.getCourseHistory().subscribe((data:MentorHistory[])=>{
      this.mentorHistoryData = data;
    })
  }

  ngOnInit() {
  }

}
