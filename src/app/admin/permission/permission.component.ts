import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { USER } from 'src/app/data/mock-user';
import { Permission } from 'src/app/data/admin.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  UserData:Permission[]=[];
  MentorData:Permission[]=[];
  data:Permission;
  role:string;
  constructor(
    private adminAuth:AdminService
  ) {
    // console.log("==============>"+this.UserData);
    if(this.adminAuth.adminLoggedIn){
      USER.forEach(user => {
        this.role = user.credential.role;
        this.data={
          accountStatus:user.credential.accountStatus,
          username:user.credential.auth.username,
          fullname:user.fullname
        }
        if(this.role == 'user'){
          // console.log("USER DATA");
          // console.log(this.data);
          // console.log(this.UserData);
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

  

  ngOnInit() {
  }

}
