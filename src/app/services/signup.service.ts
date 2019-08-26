import { Injectable } from "@angular/core";
import { signUpUser, signUpUserForm } from "../data/user.model";
import { USER } from "../data/mock-user";
import { MENTORS } from '../data/mock-mentor';
import { Mentor } from '../data/mentor.model';
@Injectable({
  providedIn: "root"
})
export class SignupService {
  signUpUserObj: signUpUser;
  newMentor:Mentor;
  constructor() {}

  createUserAccount(loginData: signUpUserForm) {
    this.signUpUserObj = {
      fullname: loginData.fullname,
      credential: {
        role: loginData.role,
        auth: {
          username: loginData.username,
          password: loginData.password
        }
      }
    };

    USER.push(this.signUpUserObj);
    USER.forEach(user => {
      console.log(user.fullname + " : " + user.credential.role);
    });
  }

  createMentorAccount(mentorCreateData,signUpData,materialTypeData){
    this.newMentor={
      details : mentorCreateData,
      skills :signUpData.mentorSkillControl,
      timezone:signUpData.timeZoneControl,
      timeslot: +signUpData.timeSlotControl,
      materialType:materialTypeData,
      linkedInUrl:signUpData.linkedInUrl,
      experience:signUpData.experience
  }
  console.log("****************");
  console.log(MENTORS);
    MENTORS.push(this.newMentor);
    MENTORS.forEach(mentor => {
      console.log(mentor);
    });
  }
}
