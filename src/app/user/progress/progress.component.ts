import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UpdateService } from 'src/app/services/update.service';
import { TrainingProgress } from 'src/app/data/final-model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  loggedUser:string;
  traingingProgressData:TrainingProgress[];
  rating:number[];
  constructor(
    private updateService:UpdateService,
    private authService :AuthService
  ) {
    this.rating = [1,2,3,4,5];
    if(this.authService.isLoggedIn){
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
      // TODO subscribe to Service to see result of addCompletedTraining
      this.updateService.addCompletedTraining(data);
      // TODO subscribe to Service to see result of addCompletedTraining
      this.updateService.deleteCourseProgress(this.authService.LoggedInUsername,data.coursedetail.courseid);
    }

   }

   updatePayment(data){
    //  console.log(data);
    //  console.log("+++++++++++++++++++++++++");
     this.updateService.updateCoursePayment(this.authService.LoggedInUsername,data);
   }

   deleteCourse(courseid){
     this.updateService.deleteCourseProgress(this.authService.LoggedInUsername,courseid);
   }

  ngOnInit() {
  }

}
