import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/data.model';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  mentorSkills: Technology[];
  constructor(
    private mainService : MainService
  ) {
    this.mainService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
   }

  ngOnInit() {
  }

}
