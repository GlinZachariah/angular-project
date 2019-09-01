import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(
    private http:HttpClient
  ) { }

  addCourseDetails(CourseDetails,materialType){
    // TODO send POST request to addCourseDetails 
  }

  getCardDetails(){
    // TODO send POST request to getCardDetails 
  }

  updateMentorDetails(formData,materialType){
    // TODO send POST request to updateMentorDetails 
  }

  getCourseHistory(){
    return this.http.get("assets/mentorHistory.json");
  }

}
