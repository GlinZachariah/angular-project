import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './mentor/home/home.component';
import { SearchComponent } from './search/search.component';
import { ProgressComponent } from './user/progress/progress.component';
import { CompletedComponent } from './user/completed/completed.component';
import { LoginComponent } from './admin/login/login.component';
import { PermissionComponent } from './admin/permission/permission.component';

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
  },
  {
    path: 'trainings/browse',
    component : SearchComponent
  },
  {
    path: 'user/trainings/browse',
    component : SearchComponent
  },
  {
    path:'user/trainings/progress',
    component :ProgressComponent
  },
  {
    path:'user/trainings/completed',
    component:CompletedComponent
  },
  {
    path:'admin/signin',
    component:LoginComponent
  },
  {
    path:'admin/permission',
    component:PermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
