import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './completed/completed.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [CompletedComponent, ProfileComponent, ProgressComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
