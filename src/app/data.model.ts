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

export interface UserForm {
  fullname: string;
  role: string;
  username: string;
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
  value: string;
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

export interface TrainingCompleted {
  coursedetail: CourseDetails;
  username:string;
  timeslot: string;
  startdate: string; //TODOD datatype of start date
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
  timeslot: string;
  startdate: string; //TODOD datatype of start date
}

export interface Payment{
    timestamp:string,
    username:string,
    courseid:string,
    trainername:string,
    paymentamount:number,
    commission:number
}

export class Report{
  username:string;
  courseid:string;
  progress:number;
  cost:number;
}

export interface Mentor{
  details : signUpUserForm;
  skills :string[];
  timezone:string;
  timeslot: string;
  materialType:CourseMaterial;
  linkedInUrl:string;
  experience:number;
}

export interface AlertMessage{
  status:boolean;
  message:string;
}

export interface MentorHistory{
  timestamp : string;
  username :string;
  courseId :string;
  approvalStatus:string;
  paymentStatus:string;
  timeslot:string;
  courseProgress:number;
  withdrawCount:number;
}
