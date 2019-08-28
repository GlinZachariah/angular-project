import { Injectable } from '@angular/core';
import { ADMIN } from '../data/mock-admin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { USER, PAYMENTLOG, COMPLETED, USERPROGRESS } from '../data/mock-user';
import { MENTORS, COURSES } from '../data/mock-mentor';
import { Report } from '../data/admin.model';
import { Skills } from '../data/public.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn:boolean =false;
  isAdminLogged:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataGen:Report;
  constructor(
    private http:HttpClient
  ) { }

  performAuth(username,password,route){
    //TODO send POST to performAuth and return the status
    return this.http.get("assets/admin.json");
  }


  updateUserPermission(data,route){
    console.log(data);
    var result;
    if(data.accountStatus == 'locked'){
      USER[data.userIdx].credential.accountStatus ='unlocked';
      result ='unlocked';
    }else{
      USER[data.userIdx].credential.accountStatus ='locked';
      result='locked';
    }
    return result;
  }


  getPaymentLog(){
    return PAYMENTLOG;
  }

  getMentorList(){
    var resultData:string[] =[];
    for(var idx=0;idx<MENTORS.length;idx++){
      resultData.push(MENTORS[idx].details.username);
    }
    return resultData;
  }

  getMentorReport(trainername){
    var resultData:Report[]=[];
    COMPLETED.forEach(data => {
      if(data.coursedetail.trainername == trainername){
        this.dataGen={
          username:data.username,
          courseid:data.coursedetail.courseid,
          progress:1,
          cost:data.coursedetail.charges
        }
        resultData.push(this.dataGen);
      }
    });

    USERPROGRESS.forEach(data => {
      if(data.coursedetail.trainername == trainername){
        this.dataGen={
          username:data.username,
          courseid:data.coursedetail.courseid,
          progress:data.progress,
          cost:data.coursedetail.charges
        }
        resultData.push(this.dataGen);
      }
    });
    return resultData;
  }

  getCurrentCourse(){
    return this.http.get("assets/currentCourses.json");
  }

  updateCourseCommission(courseid,newCommissionValue){
    //TODO send POST request to updateCourseCommission based on courseid and new value;
    return (newCommissionValue/100);
  }

  getTechnologies(){
    return this.http.get("assets/technologies.json");
  }

  addTech(data){
     //TODO send POST request to addTech based on courseid and new value;
  }

  deleteTech(data){
     //TODO send POST request to deleteTech based on courseid and new value;
  }

}
