import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { MentorModel, Technology, CalendarModel, MentorProgress } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', localStorage.getItem("token"));
  loggedinUser;
  calendar:CalendarModel
  constructor(
    private http:HttpClient,
    private mainService:MainService
  ) {
    this.loggedinUser =mainService.LoggedInUsername;
   }

   getMentorCourses(mentorname: string) {
    return this.http.get('/api/mentor/getCoursesList/'+mentorname,{headers:this.headers});
  }

  addCourseDetails(CourseDetails){
    // TODO send POST request to addCourseDetails 
    let obs = this.http.post('/api/mentor/addCourse',CourseDetails,{headers:this.headers});
    obs.subscribe();
  }

  deleteCourse(courseid){
    return this.http.delete('/api/mentor/deleteCourse/'+courseid,{headers:this.headers});
  }

  saveCalendar(calendarData){
    this.calendar={
      fromDate:calendarData.fromDate,
      tillDate:calendarData.tillDate,
      timeSlot:parseInt(calendarData.timeSlot),
      mentorName:this.loggedinUser,
      status:calendarData.status
    }
    let obs = this.http.post('/api/mentor/addCalendar',this.calendar,{headers:this.headers});
    obs.subscribe();
    return this.calendar;
  }

  getCalendarData(username){
    return this.http.get('/api/mentor/findCalendar/'+username,{headers:this.headers});
  }

  deleteCalendar(data:CalendarModel){
    return this.http.put('/api/mentor/deleteCalendar/',data,{headers:this.headers});
  }

  updateMentorDetails(formData,materialType){
    // TODO send POST request to updateMentorDetails 
  }

  getMentorDetails(username):Observable<MentorModel>{
    return  this.http.get<MentorModel>('/api/mentor/getMentorDetails/'+username,{headers:this.headers});
  }

  getMentorSkills(username):Observable<Technology[]>{
    return this.http.get<Technology[]>('/api/mentor/getMentorSkills/'+username,{headers:this.headers});
  }

  getCourseHistory(username){
    return this.http.get("/api/mentor/viewMentorProgress/"+username,{headers:this.headers});
  }

  getMentorProgress(username){
    return this.http.get('/api/mentor/viewMentorHistory/'+username,{headers:this.headers});
  }

  approveCourse(data){
    data.courseStatus = 'Approved';
   return this.http.put('/api/mentor/updateMentorProgress/',data,{headers:this.headers});
  }

  rejectCourse(data){
    data.courseStatus = 'Rejected';
    return this.http.put('/api/mentor/updateMentorProgress/',data,{headers:this.headers});
  }

  withdraw(data){
    return this.http.put('/api/mentor/withdrawAmount',data,{headers:this.headers});
  }

}
