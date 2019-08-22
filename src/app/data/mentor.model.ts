import { signUpUser } from "./user.model";


export interface Mentor{
    details : signUpUser;
    skills :{};
    timezone:{};
    timeslot: string;
    materialType:{};
    linkedInUrl:string;
    experience:number;
}