export interface Login{
  auth:boolean,
  role:string,
  fullname:string
}

export interface signUpUserForm{
  fullname:string;
  accountStatus:string;
  role:string;
  username:string;
  password:string;
}

export interface CourseDetails {
  courseid: string;
  coursename: string;
  trainername: string;
  technology: string;
  charges: number;
  commission:number;
}

export interface TrainingProgress {
  coursedetail: CourseDetails;
  username: string;
  progress: number;
  rating: number;
  status: string;
  paymentstatus: string;
  timeslot: number;
  startdate: string; //TODOD datatype of start date
}

export interface TrainingCompleted {
  coursedetail: CourseDetails;
  username:string;
  timeslot: number;
  startdate: string; //TODOD datatype of start date
}
