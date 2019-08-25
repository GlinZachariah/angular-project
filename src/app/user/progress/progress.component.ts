import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UpdateService } from 'src/app/services/update.service';
import { TrainingProgress } from 'src/app/data/user.model';

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
      this.traingingProgressData = this.updateService.getUserTrainingsInProgress(this.authService.LoggedInUsername);
      
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
    //  console.log(data);
    //  console.log(progress);
    //  console.log(rating);
    if(progress<100){
      this.updateService.updateCourseProgress(this.authService.LoggedInUsername,data,progress,rating);
    }
     
   }

   updatePayment(data){
     console.log(data);
     console.log("+++++++++++++++++++++++++");
     this.updateService.updateCoursePayment(this.authService.LoggedInUsername,data);
   }

  ngOnInit() {
  }

}
