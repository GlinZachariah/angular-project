export interface signIn{
    username:string;
    password:string;
}

export interface signInUser{
    role:string;
    credential :signIn;
}

export interface signUpUser{
    credential: signInUser;
    fullname:string;
}