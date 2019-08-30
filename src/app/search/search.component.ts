import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';
import { TIMESLOT } from '../data';
import { Technology } from '../data.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchForm;
  timeSlots = TIMESLOT;
  mentorSkills: Technology[];
  searchResult;
  constructor(
    private formBuilder: FormBuilder,
    private searchService: MainService
  ) {
    this.searchService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.SearchForm = this.formBuilder.group({
      SearchTech: '',
      SearchDate: '',
      SearchTimeSlot: ''
    });
   }

   SearchTrainer(formData){
      this.searchService.searchTrainings(formData).subscribe((data)=>{
        this.searchResult =data;
      });
   }

  ngOnInit() {
  }

}
