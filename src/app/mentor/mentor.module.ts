import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { MprofileComponent } from './mprofile/mprofile.component';
import { MprogressComponent } from './mprogress/mprogress.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, EditskillsComponent, MprofileComponent, MprogressComponent, HistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MentorModule { }
