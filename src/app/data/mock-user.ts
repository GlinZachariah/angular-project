import { signUpUser, TrainingProgress } from './user.model';
import { TrainingCompleted } from "./user.model";



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
    timeslot: 8,
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
    timeslot: 8,
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
    timeslot: 8,
    startdate: ''  //TODO Date
  }
];


export const USERPROGRESS: TrainingProgress[]=[
  {
    coursedetail:{
      courseid:'CS103',
      coursename:'Core Java',
      technology:'Git',
      trainername:'thomas zac',
      charges:7000
    },
    paymentstatus:'paid',
    progress:75,
    rating:3,
    startdate:'',
    status:'on going',
    timeslot:8,
    username:'n'

  },
  {
    coursedetail:{
      courseid:'CS103',
      coursename:'Python Fundamentals',
      technology:'Python',
      trainername:'thomas zac',
      charges:7000
    },
    paymentstatus:'na',
    progress:25,
    rating:0,
    startdate:'',
    status:'rejected',
    timeslot:8,
    username:'n'

  },
  {
    coursedetail:{
      courseid:'CS103',
      coursename:'Spring Basics of MVC',
      technology:'Spring',
      trainername:'thomas zac',
      charges:7000
    },
    paymentstatus:'na',
    progress:25,
    rating:0,
    startdate:'',
    status:'proposal pending',
    timeslot:8,
    username:'n'

  },
  {
    coursedetail:{
      courseid:'CS103',
      coursename:'Angular Intermediate',
      technology:'Angular',
      trainername:'thomas zac',
      charges:7000
    },
    paymentstatus:'pending',
    progress:25,
    rating:0,
    startdate:'',
    status:'approved',
    timeslot:8,
    username:'n'

  }
]