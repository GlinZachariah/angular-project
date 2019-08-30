import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){
  }

  getTrainingsCompleted(username){
    //TODO send HTTP post request to getTrainingsCompleted by username and return status
    return this.http.get("assets/completedTraining.json");
  }

  getUserTrainingsInProgress(usern){
    //TODO send HTTP post request to getTrainingsInProgress by username and return status
    return this.http.get("assets/userProgressTraining.json");
  }

  updateCourseProgress(username,courseid,progress,rating){
    //TODO send HTTP post request to  by username and return status
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

    //TODO send HTTP post request to  by username and return status
  }

  updateCoursePayment(username,courseid){
   //TODO send HTTP post request to updateCoursePayment by username and return status
  }

  deleteCourseProgress(username,courseid){
  //TODO send HTTP post request to deleteCourseProgress by username and return status
  }

  getCardDetails(){
    //TODO send HTTP post request to getCardDetails  by username and return status
  }
}
