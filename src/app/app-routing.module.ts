import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './mentor/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup/mentor',
    component: MentorSignupComponent
  },
  {
    path: 'signup/user',
    component: UserSignupComponent
  },
  {
    path: 'user/:username',
    component: ProfileComponent
  },
  {
    path: 'mentor/:username',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
