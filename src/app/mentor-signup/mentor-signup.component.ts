import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from "@angular/forms";
import { SignupService } from "../services/signup.service";
import {TIMESLOT,Skills} from "../data/public.model";
import {TIMEZONE} from "../data/timezone";
import { signUpUserForm } from '../data/user.model';

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
  mentorCreateData:signUpUserForm;
  
  constructor(
    private mentorService:SignupService,
    private formBuilder: FormBuilder,
    private signUpService :SignupService
  ) {
    //console.log(this.mentorSkills);
    //console.log(this.timeZones);
    this.formMentor = formBuilder.group({
      username:'',
      fullname:'',
      linkedInUrl:'',
      experience:'',
      password:'',
      timeSlotControl:'',
      timeZoneControl:'',
      mentorSkillControl:''
    });

    this.materialType =new FormGroup({
        video:new FormControl(),
        blog:new FormControl(),
        ppt:new FormControl(),
        demo:new FormControl()
    });

   }
   

   signUpMentor(signUpData,materialTypeData){
    console.warn(signUpData);
    // TODO PENDING
    this.mentorCreateData = {
      fullname:signUpData.fullname,
      role:'mentor',
      username:signUpData.username,
      password :signUpData.password
    }
    this.signUpService.createUserAccount(this.mentorCreateData);
    this.signUpService.createMentorAccount(this.mentorCreateData,signUpData,materialTypeData);
   }

  ngOnInit() {
  }

}
