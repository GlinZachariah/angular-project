import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionComponent } from './permission/permission.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportsComponent } from './reports/reports.component';
import { CommissionComponent } from './commission/commission.component';



@NgModule({
  declarations: [
    LoginComponent,
    PermissionComponent,
    PaymentsComponent,
    ReportsComponent,
    CommissionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
