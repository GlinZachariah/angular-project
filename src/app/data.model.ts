export interface Login{
  auth:boolean,
  role:string,
  fullname:string
}

export interface signIn {
  username: string;
  password: string;
}

export interface signUpUserForm {
  fullname: string;
  role: string;
  username: string;
  password: string;
  accountStatus: string,

}

export interface TimeZone {
  value: string;
    abbr: string;
    offset: number;
    isdst: boolean;
    text: string;
    utc :string[];
}


export interface TimseSlot {
  value: number;
  text: string;
}

export interface Technology{
  name:string;
}


export interface CourseMaterial{
  video:boolean;
  blog:boolean;
  ppt:boolean;
  demo:boolean;
}

export interface SearchTrainingResult{
  courseId:string;
  courseName:string;
  trainerName:string;
  totalTrainee: number;
  trainerSkills: Technology[];
  courseType:CourseMaterial;
  experience:number;
  trainerCharges:number;
  serviceCharges:number;
}
