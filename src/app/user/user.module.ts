import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CompletedComponent } from './completed/completed.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent, CompletedComponent, ProgressComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
