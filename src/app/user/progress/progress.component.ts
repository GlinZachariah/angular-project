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
  constructor(
    private updateService:UpdateService,
    private authService :AuthService
  ) {
    if(this.authService.isLoggedIn){
      this.traingingProgressData = this.updateService.getUserTrainingsInProgress(this.authService.LoggedInUsername);
      console.log("PROGRESS ============================="+this.traingingProgressData);
      this.traingingProgressData.forEach(element => {
        console.log(element);
      });
    }
   }

  ngOnInit() {
  }

}
