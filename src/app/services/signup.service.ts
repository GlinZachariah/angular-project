import { Injectable } from '@angular/core';
import { signUpUser } from '../data/user.model';
import { USER } from '../data/mock-user';
import { MENTORS } from '../data/mock-mentor';
import { Mentor } from '../data/mentor.model';
import { signUpUserForm } from '../data/final-model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signUpUserObj: signUpUserForm;
  newMentor: Mentor;
  constructor(private http: HttpClient) {}

  createUserAccount(loginData: signUpUserForm) {
    this.signUpUserObj = {
      fullname: loginData.fullname,
      accountStatus: loginData.accountStatus,
      role: loginData.role,
      username: loginData.username,
      password: loginData.password
    };

    //  TODO send signUpUSerObject via HTTP POST and return status;
  }

  createMentorAccount(mentorCreateData, signUpData, materialTypeData) {
    this.newMentor = {
      details: mentorCreateData,
      skills: signUpData.mentorSkillControl,
      timezone: signUpData.timeZoneControl,
      timeslot: +signUpData.timeSlotControl,
      materialType: materialTypeData,
      linkedInUrl: signUpData.linkedInUrl,
      experience: signUpData.experience
    };

    //  TODO send newMentor via HTTP POST and return status;
  }
}
