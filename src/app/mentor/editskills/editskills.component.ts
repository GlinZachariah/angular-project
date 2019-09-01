import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { MainService } from '../../main.service';

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
