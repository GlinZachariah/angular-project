import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/services/update.service';
import { TrainingCompleted } from 'src/app/data/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  trainingCompletedData:TrainingCompleted[];
  loggedUser:string;
  constructor(
    private updateService:UpdateService,
    private authService :AuthService
  ) {
    if(authService.isLoggedIn){
      this.trainingCompletedData = this.updateService.getTrainingsCompleted(authService.LoggedInUsername);
    }

    // console.log(this.trainingCompletedData);
    // console.log(this.trainingCompletedData[0]);
  }

  ngOnInit() {
  }

}
