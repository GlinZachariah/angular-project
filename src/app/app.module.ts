import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserModule } from './user/user.module';
import { MentorModule } from './mentor/mentor.module';
import { HomeComponent } from './mentor/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    UserSignupComponent,
    MentorSignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    MentorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
