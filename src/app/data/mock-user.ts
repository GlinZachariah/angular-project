import { signUpUser, TrainingProgress } from './user.model';
import { TrainingCompleted } from "./user.model";
import { Payment } from './mentor.model';



export const USER: signUpUser[] = [
  {
    fullname: 'glin zac',
    credential: {
      accountStatus:'unlocked',
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
      accountStatus:'unlocked',
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
      accountStatus:'unlocked',
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
      accountStatus:'unlocked',
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
      accountStatus:'unlocked',
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
      trainername:'l',
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
      trainername:'l',
      charges:7000
    },
    username: 'n',
    timeslot: 8,
    startdate: ''  //TODO Date
  },
  {
    coursedetail:{
      courseid:'CS101',
      coursename:'Core Java',
      technology:'Git',
      trainername:'l',
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
      courseid:'CS101',
      coursename:'Core Java',
      technology:'Git',
      trainername:'l',
      charges:7000
    },
    paymentstatus:'paid',
    progress:0.75,
    rating:3,
    startdate:'',
    status:'on going',
    timeslot:8,
    username:'n'

  },
  {
    coursedetail:{
      courseid:'CS102',
      coursename:'Python Fundamentals',
      technology:'Python',
      trainername:'l',
      charges:7000
    },
    paymentstatus:'na',
    progress:0,
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
    progress:0,
    rating:0,
    startdate:'',
    status:'proposal pending',
    timeslot:8,
    username:'n'

  },
  {
    coursedetail:{
      courseid:'CS104',
      coursename:'Angular Intermediate',
      technology:'Angular',
      trainername:'l',
      charges:7000
    },
    paymentstatus:'pending',
    progress:0,
    rating:0,
    startdate:'',
    status:'approved',
    timeslot:8,
    username:'n'

  }
]

export const PAYMENTLOG: Payment[]=[
  {
    timestamp:new Date('2018-01-02').toDateString(),
    username:'n',
    courseid:'CS102',
    trainername:'thomas zac',
    paymentamount:5000,
    commission:0.20
  },
  {
    timestamp:new Date('2018-06-10').toDateString(),
    username:'n',
    courseid:'CS104',
    trainername:'thomas zac',
    paymentamount:7000,
    commission:0.15
  }
];
