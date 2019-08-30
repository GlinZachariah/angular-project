import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/data.model';
import { FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
  technologyForm;
  technologyList: Technology[];
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
    this.adminService.addTech(data);
  }

  deleteTechnology(data) {
    this.adminService.deleteTech(data);
  }

  ngOnInit() {}
}
