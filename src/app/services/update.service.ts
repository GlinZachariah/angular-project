import { Injectable } from '@angular/core';
import { USER, USERPROGRESS } from '../data/mock-user';
import { COMPLETED } from "../data/mock-user";
import { TrainingCompleted, TrainingProgress } from '../data/user.model';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  username:string;
  password:string;
  resultDataTrainingCompleted:TrainingCompleted[];
  resultDataTrainingProgress:TrainingProgress[];
  constructor() {
   }

  updateProfile(fname,oldpwd,name,pwd,userId){

    USER.forEach(user => {
      this.username = user.credential.auth.username;
      this.password = user.credential.auth.password;
      if(userId == this.username && oldpwd == this.password ){
        user.credential.auth.username=name;
        user.credential.auth.password =pwd;
        user.fullname = fname;
      }
    });
    // console.warn("Update Profile");
  }

  getTrainingsCompleted(usern):TrainingCompleted[]{
    this.resultDataTrainingCompleted=[];
    COMPLETED.forEach(users => {
      if(users.username == usern){
        this.resultDataTrainingCompleted.push(users);
      }
    });
    return this.resultDataTrainingCompleted;
  }

  getUserTrainingsInProgress(usern):TrainingProgress[]{
    this.resultDataTrainingProgress=[];
    USERPROGRESS.forEach(user => {
      if(user.username == usern){
        this.resultDataTrainingProgress.push(user);
      }
    });
    // console.log(this.resultDataTrainingProgress);
    return this.resultDataTrainingProgress;
  }

  updateCourseProgress(username,courseid,progress,rating){
    USERPROGRESS.forEach(user => {
      if(user.username == username && user.coursedetail.courseid ==courseid){
          user.progress = progress;
          user.rating = rating;
        }

    });
  }

  updateCoursePayment(username,courseid){
    USERPROGRESS.forEach(user => {
      if(user.username == username && user.coursedetail.courseid == courseid){
        console.warn("usercourseid:: "+ user.coursedetail.courseid);
        console.warn("courseid:: "+ courseid);
          user.paymentstatus='paid'
          user.status ='on going';
          console.warn("Executed !!!!!!!!!!!!!!!");
        }
    });
  }

  deleteCourseProgress(username,courseid){
    for(var i=0;i< USERPROGRESS.length;i++){
      if(USERPROGRESS[i].username == username && USERPROGRESS[i].coursedetail.courseid == courseid){
        USERPROGRESS.splice(i,1);
        break;
      }
    }
  }

  addCompletedTraining(data){
    let custData =  {
      coursedetail:{
        courseid: data.coursedetail.courseid,
        coursename:data.coursedetail.coursename,
        technology:data.coursedetail.technology,
        trainername:data.coursedetail.trainername,
        charges:data.coursedetail.charges
      },
      username: data.username,
      timeslot: data.timeslot,
      startdate: data.startdate  //TODO Date
    }

    COMPLETED.push(custData);
  }




}
