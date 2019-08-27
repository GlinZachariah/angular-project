import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder } from '@angular/forms';
import { Report } from 'src/app/data/admin.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  generateRep;
  mentorList:string[];
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
    this.mentorList = this.adminService.getMentorList();
    console.log(this.mentorList);
  }

  generateReport(trainername){
    this.totalAmount=0;
    if(trainername == ''){
      trainername = this.mentorList[0];
    }
    this.reportData= this.adminService.getMentorReport(trainername);
    this.reportData.forEach(data => {
      this.totalAmount =this.totalAmount+ data.cost;
    });
    this.isReportGen =true;
    console.log(this.reportData);
  }

  ngOnInit() {
  }

}
