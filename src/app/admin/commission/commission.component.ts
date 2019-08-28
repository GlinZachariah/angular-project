import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder } from '@angular/forms';
import { CourseDetails } from 'src/app/data/final-model';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
  currentCourses:CourseDetails[];
  updateCommission;
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
    if(this.adminService.adminLoggedIn){
      this.adminService.getCurrentCourse().subscribe((data:CourseDetails[])=>{
        this.currentCourses = data;
        console.log(this.currentCourses);
      });
      this.updateCommission =  this.formBuilder.group({
      newcoursecomm:''
    });
    }
  }

  newCommission(courseid,newCommissionValue){
    this.updateCommission.reset();
    // TODO subscribe to Service to see result of updateCourseCommission and return result
    return this.adminService.updateCourseCommission(courseid,newCommissionValue);
  }

  ngOnInit() {
  }

}
