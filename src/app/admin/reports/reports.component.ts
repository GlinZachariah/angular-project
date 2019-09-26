import { Component, OnInit } from '@angular/core';
import { Report, Mentor } from 'src/app/data.model';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  generateRep;
  mentorList:string[]=[];
  isReportGen:boolean= false;
  reportData:Report[];
  totalAmount:number;
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
    this.generateRep = this.formBuilder.group({
      username:''
    });
    if(this.adminService.adminLoggedIn){
    this.adminService.getMentorList().subscribe((data:Mentor[])=>{
      data.forEach(mentor => {
        this.mentorList.push(mentor.details.userName);
      });
    });
    }
  }

  generateReport(trainername){
    this.totalAmount=0;
    if(trainername == ''){
      trainername = this.mentorList[0];
    }
    this.adminService.getMentorReport(trainername).subscribe((data:Report[])=>{
      this.reportData= data;
      this.reportData.forEach(data => {
        this.totalAmount =this.totalAmount+ data.cost;
      });
    });
    this.isReportGen =true;
  }

  ngOnInit() {
  }

}
