import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Technology, signUpUserForm } from '../../data.model';
import { TIMEZONE, TIMESLOT } from '../../data';
import { MainService } from '../../main.service';
import { MentorService } from "../mentor.service";
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
    private mentorServie:MentorService,
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

  saveMentorDetails(formData,materialType){
    // TODO subscribe to the service to view the status of update
    this.mentorServie.updateMentorDetails(formData,materialType);
  }

  ngOnInit() {
  }

}
