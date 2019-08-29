import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission/commission.component';
import { EdittechComponent } from './edittech/edittech.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { PermissionComponent } from './permission/permission.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommissionComponent, EdittechComponent, LoginComponent, PaymentsComponent, PermissionComponent, ReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
