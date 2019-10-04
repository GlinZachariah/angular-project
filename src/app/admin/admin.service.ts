import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn = false;
  isAdminLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataGen;
  tech:Technology;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', localStorage.getItem("token"));
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
    return this.http.get("/api/admin/getUsers",{headers:this.headers});
  }

  addTech(data:string){
    //TODO send POST request to addTech based on courseid and new value;
    // console.log(data +" =====================> This is technology name");
    this.tech={
      skillName:data
    }

    this.http.put('/api/admin/addTechnology',this.tech,{headers:this.headers}).subscribe();
 }

 deleteTech(data){
    //TODO send POST request to deleteTech based on courseid and new value;
    let obs =this.http.delete('/api/admin/deleteTechnology/'+data,{headers:this.headers});
    obs.subscribe();
 }

 getCurrentCourse(){
  return this.http.get("/api/admin/getCommissionList",{headers:this.headers});
}

updateCourseCommission(courseid,newCommissionValue){
  //TODO send POST request to updateCourseCommission based on courseid and new value;
  return this.http.get("/api/admin/updateCommission/"+courseid+"/"+newCommissionValue,{headers:this.headers});
}

getPaymentLog(){
  return this.http.get("/api/admin/getPaymentLog",{headers:this.headers});
}

updateUserPermission(data){
 //TODO send POST request to updateUserPermission based on userdetails and return new value;
 return this.http.get('/api/admin/updateUser/'+data.userName,{headers:this.headers});
}

getMentorList(){
  //TODO send POST request to getMentorList
  return this.http.get("/api/admin/getUsers",{headers:this.headers});
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
  return this.http.get("/api/admin/getReport/"+trainername,{headers:this.headers});
}
}
