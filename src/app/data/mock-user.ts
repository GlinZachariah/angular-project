import { signUpUser } from './user.model';
import { TrainingCompleted } from "./user.model";
import { DatePipe } from '@angular/common';


export const USER: signUpUser[] = [
  {
    fullname: 'glin zac',
    credential: {
      role: 'mentor',
      auth: {
        username: 'l',
        password: 'l'
      }
    }
  },
  {
    fullname: 'karun jossy',
    credential: {
      role: 'user',
      auth: {
        username: 'karun',
        password: 'loveu3000'
      }
    }
  },
  {
    fullname: 'kiran jose',
    credential: {
      role: 'user',
      auth: {
        username: 'kiran',
        password: 'loveu3000'
      }
    }
  },
  {
    fullname: 'thomas zac',
    credential: {
      role: 'mentor',
      auth: {
        username: 'm',
        password: 'm'
      }
    }
  },
  {
    fullname: 'thomas mathew',
    credential: {
      role: 'user',
      auth: {
        username: 'n',
        password: 'n'
      }
    }
  }
];


export const COMPLETED:TrainingCompleted[]=[
  {
    coursedetail:{
      courseid:'CS101',
      coursename:'Angular Basics',
      technology:'Angular',
      trainername:'thomas zac',
      charges:5000
    },
    username: 'n',
    timeslotvalue:'8',
    startdate: ''  //TODO Date
  },
  {
    coursedetail:{
      courseid:'CS102',
      coursename:'Git Basics',
      technology:'Git',
      trainername:'thomas zac',
      charges:7000
    },
    username: 'n',
    timeslotvalue:'8',
    startdate: ''  //TODO Date
  },
  {
    coursedetail:{
      courseid:'CS103',
      coursename:'Core Java',
      technology:'Git',
      trainername:'thomas zac',
      charges:7000
    },
    username: 'n',
    timeslotvalue:'8',
    startdate: ''  //TODO Date
  }
];
