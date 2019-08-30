import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './completed/completed.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CompletedComponent, ProfileComponent, ProgressComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
