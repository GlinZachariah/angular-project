import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SearchTrainingResult } from '../data.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() resultData: SearchTrainingResult[];
  results;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.results = changes['resultData'].currentValue;
  }

}
