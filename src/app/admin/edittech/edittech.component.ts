import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
  technologyList;
  constructor(
    private adminService:AdminService
  ) {
    this.technologyList= this.adminService.getTechnologies();
    console.log(this.technologyList);
   }

  ngOnInit() {
  }

}
