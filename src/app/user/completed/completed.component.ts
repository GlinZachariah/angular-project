import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/services/update.service';
import { TrainingCompleted } from 'src/app/data/final-model';
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
    if(this.authService.isLoggedIn){
      this.updateService.getTrainingsCompleted(this.authService.LoggedInUsername).subscribe((data:TrainingCompleted[]) =>{
        this.trainingCompletedData = data;
      });
    }
  }

  ngOnInit() {

  }

}
