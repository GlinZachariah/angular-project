import { Component, OnInit } from '@angular/core';
import { TrainingProgress } from 'src/app/data.model';
import { UserService } from '../user.service';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {
  loggedUser: string;
  traingingProgressData: TrainingProgress[];
  rating: number[];
  constructor(
    private updateService: UserService,
    private authService : MainService
  ) {
    this.rating = [1,2,3,4,5];
    if(this.authService.isLoggedIn) {
     this.updateService.getUserTrainingsInProgress(this.authService.LoggedInUsername).subscribe((data:TrainingProgress[])=>{
      this.traingingProgressData=data;
     });

    }
   }

   updateRating(rating){
    rating+=1;
    rating=rating%6;
    return rating;
  }

  changeProgress(e) {
   return e.target.value;
  }

  saveData(data,progress,rating){
   if(progress<100){
     // TODO subscribe to Service to see result of updateCourseProgress
     this.updateService.updateCourseProgress(this.authService.LoggedInUsername,data.coursedetail.courseid,progress,rating);
   }else{
     // TODO subscribe to Service to see result of addCompletedTraining and deleteCourseProgress
     this.updateService.addCompletedTraining(data);

   }

  }

  updatePayment(data){
   // TODO subscribe to Service to see result of updateCoursePayment
    this.updateService.updateCoursePayment(this.authService.LoggedInUsername,data);
  }

  deleteCourse(courseid){
    // TODO subscribe to Service to see result of deleteCourseProgress
    this.updateService.deleteCourseProgress(this.authService.LoggedInUsername,courseid);
  }

  ngOnInit() {
  }

}
