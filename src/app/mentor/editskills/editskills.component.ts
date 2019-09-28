import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { MainService } from '../../main.service';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  mentorSkills: Technology[];
  selectedSkills :Technology[];
  isLoaded:boolean;
  constructor(
    private mainService : MainService,
    private mentorService : MentorService
  ) {
    this.isLoaded =false;
    this.mentorService.getMentorSkills(mainService.LoggedInUsername).subscribe((newdata:Technology[])=>{
      this.selectedSkills=newdata;
      this.mainService.getTechData().subscribe((data: Technology[]) => {
        this.mentorSkills = data;
        this.isLoaded= true;
      });

      
    });
   }

  ngOnInit() {
    
     }

}
