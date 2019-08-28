import { Mentor } from './mentor.model';
import { CourseDetails } from './user.model';

export var MENTORS:Mentor[]=[
    {   details :{
        fullname: 'glin zac',
        role: 'mentor',
        username: 'l',
        password: 'l'
        },
        skills:[
            'git','angular'
        ],
        timezone:'(UTC-11:00) Coordinated Universal Time-11',
        timeslot:8,
        materialType:{
            video:false,
            blog:false,
            ppt:false,
            demo:false
            },
        linkedInUrl:'',
        experience:12,

    },
    {   details :{
      fullname: 'thomas zac',
      role: 'mentor',
      username: 'm',
      password: 'm'
      },
      skills:[
          'git','angular'
      ],
      timezone:'(UTC-11:00) Coordinated Universal Time-11',
      timeslot:8,
      materialType:{
          video:false,
          blog:false,
          ppt:false,
          demo:false
          },
      linkedInUrl:'',
      experience:12,

  }
];

export const COURSES:CourseDetails[]=[
  {
    courseid:'CS101',
    coursename:'Angular Basics',
    technology:'Angular',
    trainername:'l',
    charges:5000,
    commission:0.1
  },
  {
    courseid:'CS102',
    coursename:'Git Basics',
    technology:'Git',
    trainername:'l',
    charges:7000,
    commission:0.3
  },
  {
    courseid:'CS103',
    coursename:'Core Java',
    technology:'Git',
    trainername:'l',
    charges:7000,
    commission:0.2
  },
  {
    courseid:'CS104',
    coursename:'Spring Basics of MVC',
    technology:'Spring',
    trainername:'thomas zac',
    charges:7000,
    commission:0.2
  }
];
