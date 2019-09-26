import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { signUpUserForm, Technology, AlertMessage } from '../data.model';
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
  alertMessage:AlertMessage;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();


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
      userName: signUpData.username,
      userPassword: signUpData.password,
      fullName: signUpData.fullname,
      userRole: 'mentor',
      accountStatus: 'unlocked'
    };

    

    // TODO subscribe to Service to see result of createMentorAccount
    this.mainService.createMentorAccount(this.mentorCreateData,signUpData, materialTypeData);
    this.alertMessage ={
      status:true,
      message:'Signed Up Successfully !'
    }
    this.LoginStatus.emit(this.alertMessage);
    console.log("CreateMentor Function Executed");
  }

  ngOnInit() {
  }

}
