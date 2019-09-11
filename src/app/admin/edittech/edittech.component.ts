import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../../main.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
  technologyForm;
  technologyList: Technology[];
  technology:Technology;
  deleteAction=0;
  addAction=0;
  constructor(
    private mainSerive: MainService,
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {
    this.technologyForm = this.formBuilder.group({
      newTechnology: ''
    });
    if (this.adminService.adminLoggedIn) {
      this.mainSerive.getTechData().subscribe((data: Technology[]) => {
        this.technologyList = data;
        console.log(this.technologyList);
      });

    }
  }

  addTechnology(data) {
    // TODO subscribe to Service to see result of addTech
    this.addAction = 1;
    this.technology ={
      name:data.newTechnology
    }

    this.adminService.addTech(data);
    this.technologyList.push(this.technology)
  }

  deleteTechnology(data) {
    this.deleteAction = 1;
    this.adminService.deleteTech(data);
    console.log(this.technologyList);
    let techList:Technology[] = this.technologyList;

    for(var Idx =0 ;Idx<techList.length;Idx++){
      
      if(techList[Idx].name === data){
        console.warn("LIST "+techList[Idx].name+" Idx "+Idx+" Data "+data);
    //     // techList.splice(Idx,Idx+1);
        console.log("NEW LIST : "+techList);
    //     break;
      }
     
    }
    // this.technologyList.forEach(tech => {
    //   if(this.te)
    // });
    console.log("NEW LIST : "+this.technologyList);

  }

  ngOnInit() {}

}
