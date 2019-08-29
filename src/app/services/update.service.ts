import { Injectable } from '@angular/core';
import { USER, USERPROGRESS } from '../data/mock-user';
import { COMPLETED } from "../data/mock-user";
import { TrainingCompleted, TrainingProgress } from '../data/user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  username:string;
  password:string;
  resultDataTrainingCompleted:TrainingCompleted[];
  resultDataTrainingProgress:TrainingProgress[];
  constructor(
    private http:HttpClient
  ) {
   }

  updateProfile(fname,oldpwd,name,pwd,userId){
    //TODO send HTTP post request to updateUserProfile and return status
  }

  getTrainingsCompleted(usern){
     //TODO send HTTP post request to getTrainingsCompleted by username and return status
    return this.http.get('assets/completedTraining.json');
  }

  getUserTrainingsInProgress(usern){
    //TODO send HTTP post request to getTrainingsInProgress by username and return status
    return this.http.get("assets/userProgressTraining.json");
  }

  updateCourseProgress(username,courseid,progress,rating){
    //TODO send HTTP post request to  by username and return status
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
        charges:data.coursedetail.charges,
        commission:data.coursedetail.commission
      },
      username: data.username,
      timeslot: data.timeslot,
      startdate: data.startdate
    }

    COMPLETED.push(custData);
  }




}
