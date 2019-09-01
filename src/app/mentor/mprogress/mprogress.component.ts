import { Component, OnInit } from '@angular/core';
import { MentorService } from "../mentor.service";
import { MentorProgress } from '../../data.model';

@Component({
  selector: 'app-mprogress',
  templateUrl: './mprogress.component.html',
  styleUrls: ['./mprogress.component.css']
})
export class MprogressComponent implements OnInit {
  progressData;
  constructor(
    private mentorService:MentorService
  ) {
    this.mentorService.getMentorProgress().subscribe((data:MentorProgress)=>{
      this.progressData = data;
    });
   }

  ngOnInit() {
  }

}
