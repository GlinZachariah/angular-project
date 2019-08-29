import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { signUpUserForm, Technology } from '../data.model';
import { MainService } from '../main.service';
import { TIMEZONE, TIMESLOT } from '../data';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {
  formMentor;
  materialTypes: string[];
  materialType: FormGroup;
  mentorSkills: Technology[];
  timeZones =TIMEZONE;
  timeSlots =TIMESLOT;
  mentorCreateData: signUpUserForm;


   constructor(
    private mainService : MainService,
    private formBuilder: FormBuilder
  ) {
    this.mainService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.formMentor = this.formBuilder.group({
      username: '',
      fullname: '',
      linkedInUrl: '',
      experience: '',
      password: '',
      timeSlotControl: '',
      timeZoneControl: '',
      mentorSkillControl: ''
    });

    this.materialType = new FormGroup({
      video: new FormControl(),
      blog: new FormControl(),
      ppt: new FormControl(),
      demo: new FormControl()
    });
  }

  signUpMentor(signUpData, materialTypeData) {
    this.mentorCreateData = {
      username: signUpData.username,
      password: signUpData.password,
      fullname: signUpData.fullname,
      role: 'mentor',
      accountStatus: 'unlocked'
    };

    // TODO subscribe to Service to see result of createMentorAccount
    this.mainService.createMentorAccount(this.mentorCreateData,signUpData, materialTypeData);
    console.log("CreateMentor Function Executed");
  }

  ngOnInit() {
  }

}
