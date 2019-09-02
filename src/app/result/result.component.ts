import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SearchTrainingResult } from '../data.model';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() resultData: SearchTrainingResult[];
  results;
  constructor(private mainService: MainService, private route: Router) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.results = changes['resultData'].currentValue;
  }

  proposeTraining(Idx, result: SearchTrainingResult) {
    document.getElementById(Idx).click();
    if (!this.mainService.isLoggedIn) {
      // console.log(document.getElementById(Idx));
      this.route.navigate(['signin']);
    } else {
      // TODO send POST request to and subscribe to get the status
      // console.log('Training Proposed');
    }
  }
}
