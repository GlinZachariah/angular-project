import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from "@angular/forms";
import { SignupService } from "../services/signup.service";
import {TIMESLOT,Skills} from "../data/public.model";
import {TIMEZONE} from "../data/timezone";

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {
  formMentor;
  materialTypes:string[];
  materialType:FormGroup;
  mentorSkills =Skills;
  timeZones = TIMEZONE;
  timeSlots =TIMESLOT;
  
  constructor(
    private mentorService:SignupService,
    private formBuilder: FormBuilder
  ) {
    console.log(this.mentorSkills);
    console.log(this.timeZones);
    this.formMentor = formBuilder.group({
      username:'',
      fullname:'',
      linkedInUrl:'',
      experience:'',
      password:'',
    });

    this.materialType =new FormGroup({
        video:new FormControl(),
        blog:new FormControl(),
        ppt:new FormControl(),
        demo:new FormControl()
    });
   }

  ngOnInit() {
  }

}
