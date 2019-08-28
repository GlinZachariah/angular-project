import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Technology } from 'src/app/data/final-model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
  technologyForm
  technologyList:Technology[];
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
     this.adminService.getTechnologies().subscribe((data:Technology[])=>{
      this.technologyList= data;
      console.log(this.technologyList);
    });
    this.technologyForm = this.formBuilder.group({
      newTechnology:''
    });
   }

   addTechnology(data){
     // TODO subscribe to Service to see result of addTech
    this.adminService.addTech(data);
   }

   deleteTechnology(data){
    this.adminService.deleteTech(data);
   }

  ngOnInit() {
  }

}
