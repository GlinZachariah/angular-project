import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { USER } from 'src/app/data/mock-user';
import { Permission } from 'src/app/data/admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  UserData:Permission[]=[];
  MentorData:Permission[]=[];
  custIndx;
  data:Permission;
  role:string;
  constructor(
    private adminService:AdminService,
    private route:Router
  ) {
    // console.log("==============>"+this.UserData);
    if(this.adminService.adminLoggedIn){
      this.custIndx =0;
      USER.forEach(user => {
        this.role = user.credential.role;
        this.data={
          accountStatus:user.credential.accountStatus,
          username:user.credential.auth.username,
          fullname:user.fullname,
          userIdx:this.custIndx
        }
        this.custIndx+=1;
        if(this.role == 'user'){
          this.UserData.push(this.data);
        }else{
          // console.log("MENTOR DATA");
          // console.log(this.data);
          // console.log(this.MentorData);
          this.MentorData.push(this.data);
        }
      });
    }
   }

   updatePermission(data){
    return this.adminService.updateUserPermission(data,this.route);
   }



  ngOnInit() {
  }

}
