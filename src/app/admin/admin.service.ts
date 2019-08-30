import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn = false;
  isAdminLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataGen;
  constructor(private http: HttpClient) {}

  performAuth(username, password, route) {
    //TODO send POST to performAuth and return the status
    let obs;
    obs = this.http.get('assets/admin.json');
    obs.subscribe(data => {
      if (data[0].auth == true) {
        this.adminLoggedIn = true;
        route.navigate(['admin', 'permission']);
        this.isAdminLogged.next(true);
      } else {
        this.adminLoggedIn = false;
      }
    });
    return this.adminLoggedIn;
  }

  getUserPermission(){
    //TODO send POST to getUserPermission and return the status
    return this.http.get("assets/permission.json");
  }

  addTech(data){
    //TODO send POST request to addTech based on courseid and new value;
 }

 deleteTech(data){
    //TODO send POST request to deleteTech based on courseid and new value;
 }

 getCurrentCourse(){
  return this.http.get("assets/currentCourses.json");
}

updateCourseCommission(courseid,newCommissionValue){
  //TODO send POST request to updateCourseCommission based on courseid and new value;
  return (newCommissionValue/100);
}

getPaymentLog(){
  return this.http.get("assets/paymentLog.json");
}

updateUserPermission(data,route){
 //TODO send POST request to updateUserPermission based on userdetails and return new value;
}

getMentorList(){
  //TODO send POST request to getMentorList
  return this.http.get("assets/mentorList.json");
}

getMentorReport(trainername){
//   var resultData:Report[]=[];
//   COMPLETED.forEach(data => {
//     if(data.coursedetail.trainername == trainername){
//       this.dataGen={
//         username:data.username,
//         courseid:data.coursedetail.courseid,
//         progress:1,
//         cost:data.coursedetail.charges
//       }
//       resultData.push(this.dataGen);
//     }
//   });

//   USERPROGRESS.forEach(data => {
//     if(data.coursedetail.trainername == trainername){
//       this.dataGen={
//         username:data.username,
//         courseid:data.coursedetail.courseid,
//         progress:data.progress,
//         cost:data.coursedetail.charges
//       }
//       resultData.push(this.dataGen);
//     }
//   });
//   return resultData;
// }
  return this.http.get("assets/mentorReport.json");
}
}
