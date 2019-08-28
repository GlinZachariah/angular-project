import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchForm;
  constructor(
    private formBuilder:FormBuilder,
    private updateService:UpdateService
  ) {
    this.SearchForm = this.formBuilder.group({
      SearchTech:'',
      SearchDate:'',
      SearchTimeSlot:''
    });
   }

   SearchTrainer(formData){
      // this.updateService.searchTrainings(formData);
   }

  ngOnInit() {
  }

}
