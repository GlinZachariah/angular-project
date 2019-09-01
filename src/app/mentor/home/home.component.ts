import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MainService } from '../../main.service';
import { AlertMessage, Technology, CourseMaterial } from '../../data.model';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { MentorService } from "../mentor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentorname:string;
  mentorSkills: Technology[];
  addCouseForm;
  materialType;
  cardDetails;
  alertAddCourse:AlertMessage;
  alertDeleteCourse:AlertMessage;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();
  constructor(
    private authService:MainService,
    private formBuilder:FormBuilder,
    private mentorService:MentorService
  ) {
    this.mentorname = authService.LoggedInUsername;
    this.authService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.addCouseForm =this.formBuilder.group({
      courseId:'',
      courseName:'',
      courseDuration:'',
      courseTechnology:[],
      courseCost:''
    });
    this.materialType = new FormGroup({
      video: new FormControl(),
      blog: new FormControl(),
      ppt: new FormControl(),
      demo: new FormControl()
    });
    // TODO save the getcardDetails value into the cardDetailsValue property and display if null dont update
    this.mentorService.getCardDetails();


    this.cardDetails = this.formBuilder.group({
      cardNumber:'',
      cardExpM:'',
      cardExpY:'',
      cardCV:''
    });
   }

   addCourse(addCouseForm,materialType){
    // TODO subscribe to addCourseDetails to view status of update.
    this.mentorService.addCourseDetails(addCouseForm,materialType);
    this.materialType.reset();
    this.addCouseForm.reset();
    this.alertAddCourse={
      status:true,
      message :"Course Added Successfully!"
    }
    this.LoginStatus.emit(this.alertAddCourse);
    console.log("COurse Added");
   }

   deleteCourse(){
     this.alertDeleteCourse={
      status:false,
      message :"Course Deleted Successfully!"
     }
     this.LoginStatus.emit(this.alertAddCourse);
    console.log("COurse Deleted");
   }

  ngOnInit() {
  }

}
