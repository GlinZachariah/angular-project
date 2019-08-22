export interface signIn{
    username:string;
    password:string;
}

export interface signInUser{
    role:string;
    auth :signIn;
}

export interface signUpUser{
    credential: signInUser;
    fullname:string;
}
