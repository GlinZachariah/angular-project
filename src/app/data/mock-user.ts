import { signUpUser } from './user.model';

export const USER: signUpUser[] = [
  {
    fullname: 'glin zac',
    credential: {
      role: 'mentor',
      auth: {
        username: 'tonystark',
        password: 'loveu3000'
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
  }
];
