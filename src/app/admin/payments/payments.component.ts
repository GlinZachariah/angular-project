import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  PaymentData;
  constructor(
    private adminService:AdminService
  ) {
    if(this.adminService.adminLoggedIn){
      this.PaymentData  = this.adminService.getPaymentLog();
    }

  }

  ngOnInit() {
  }

}
