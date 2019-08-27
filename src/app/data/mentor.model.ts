import { signUpUserForm } from "./user.model";
export interface MaterialType{
    video:boolean;
    blog:boolean;
    ppt:boolean;
    demo:boolean;
}

export interface Mentor{
    details : signUpUserForm;
    skills :string[];
    timezone:string;
    timeslot: number;
    materialType:MaterialType;
    linkedInUrl:string;
    experience:number;
}

export interface Payment{
    timestamp:string,
    username:string,
    courseid:string,
    trainername:string,
    paymentamount:number,
    commission:number
}



