import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { TIMESLOT, Skills } from '../data/public.model';
import { TIMEZONE } from '../data/timezone';
import { signUpUserForm } from '../data/final-model';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {
  formMentor;
  materialTypes: string[];
  materialType: FormGroup;
  mentorSkills = Skills;
  timeZones = TIMEZONE;
  timeSlots = TIMESLOT;
  mentorCreateData: signUpUserForm;

  constructor(
    private mentorService: SignupService,
    private formBuilder: FormBuilder,
    private signUpService: SignupService
  ) {
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
    // TODO subscribe to Service to see result of createUserAccount
    this.signUpService.createUserAccount(this.mentorCreateData);
    // TODO subscribe to Service to see result of createMentorAccount
    this.signUpService.createMentorAccount(
      this.mentorCreateData,
      signUpData,
      materialTypeData
    );
  }

  ngOnInit() {}
}
