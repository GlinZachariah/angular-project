import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
  currentCourses;
  constructor(
    private adminService:AdminService
  ) {
    this.currentCourses=this.adminService.getCurrentCourse();
  }

  ngOnInit() {
  }

}
