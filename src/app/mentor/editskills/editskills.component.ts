import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { MainService } from '../../main.service';
import { MentorService } from '../mentor.service';
export interface displayMentorSkills{
  skills:Technology;
  isMentorSkill :boolean;
}

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  allSkills: Technology[];
  selectedSkills :Technology[];
  mentorList:displayMentorSkills[];
  mentorItem:displayMentorSkills;
  isLoaded:boolean;
  constructor(
    private mainService : MainService,
    private mentorService : MentorService
  ) {
    this.isLoaded =false;
    this.mentorList=[];
    
    this.mentorService.getMentorSkills(mainService.LoggedInUsername).subscribe((newdata:Technology[])=>{
    this.selectedSkills=newdata;
    this.mainService.getTechData().subscribe((data: Technology[]) => {
        this.allSkills = data;
        this.isLoaded= true;
        this.allSkills.forEach(element => {
          this.mentorItem={
            skills:{skillName:''},
            isMentorSkill:false
          }
           this.mentorItem.skills.skillName =element.skillName;
          //  console.log(this.mentorItem+"=>>>>>>>>>>>>"+element.skillName);
           for(let i=0;i<this.selectedSkills.length;i++){
            if(this.selectedSkills[i].skillName == element.skillName){
              this.mentorItem.isMentorSkill = true;
              break;
              }
            }
          // console.log(this.mentorItem);
          this.mentorList.push(this.mentorItem);
        });
      });

      
    });
   }

  ngOnInit() {
    
     }

}
