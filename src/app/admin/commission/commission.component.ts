import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
  currentCourses;
  updateCommission;
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
    if(this.adminService.adminLoggedIn){
      this.currentCourses=this.adminService.getCurrentCourse();
    this.updateCommission =  this.formBuilder.group({
      newcoursecomm:''
    });
    }
  }

  newCommission(courseid,newCommissionValue){
    this.updateCommission.reset();
    return this.adminService.updateCourseCommission(courseid,newCommissionValue);
  }

  ngOnInit() {
  }

}
