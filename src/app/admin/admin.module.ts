import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission/commission.component';
import { EdittechComponent } from './edittech/edittech.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { PermissionComponent } from './permission/permission.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [CommissionComponent, EdittechComponent, LoginComponent, PaymentsComponent, PermissionComponent, ReportsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
