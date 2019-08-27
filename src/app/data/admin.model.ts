export interface Admin{
    username:string;
    password:string;
}


export class Permission{
    username:string;
    fullname:string;
    accountStatus:string;
    userIdx:number;
}


export class Report{
  username:string;
  courseid:string;
  progress:number;
  cost:number;
}
