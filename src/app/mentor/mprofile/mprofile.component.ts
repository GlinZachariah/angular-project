import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Technology, signUpUserForm } from 'src/app/data.model';
import { TIMEZONE, TIMESLOT } from 'src/app/data';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-mprofile',
  templateUrl: './mprofile.component.html',
  styleUrls: ['./mprofile.component.css']
})
export class MprofileComponent implements OnInit {
  formMentor;
  materialTypes: string[];
  materialType: FormGroup;

  timeZones =TIMEZONE;
  timeSlots =TIMESLOT;
  mentorCreateData: signUpUserForm;


   constructor(
    private mainService : MainService,
    private formBuilder: FormBuilder
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

  ngOnInit() {
  }

}
