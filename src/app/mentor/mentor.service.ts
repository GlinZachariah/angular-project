import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { MentorModel, Technology } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  loggedinUser;

  constructor(
    private http:HttpClient,
    private mainService:MainService
  ) {
    this.loggedinUser =mainService.LoggedInUsername;
   }

  addCourseDetails(CourseDetails,materialType){
    // TODO send POST request to addCourseDetails 
  }

  getCardDetails(){
    // TODO send POST request to getCardDetails 
  }

  updateMentorDetails(formData,materialType){
    // TODO send POST request to updateMentorDetails 
  }

  getMentorDetails(username):Observable<MentorModel>{
    return  this.http.get<MentorModel>('/api/mentor/getMentorDetails/'+username);
  }

  getMentorSkills(username):Observable<Technology[]>{
    return this.http.get<Technology[]>('/api/mentor/getMentorSkills/'+username);
  }

  getCourseHistory(){
    return this.http.get("assets/mentorHistory.json");
  }

  getMentorProgress(){
    return this.http.get("assets/mentorProgress.json");
  }

}
