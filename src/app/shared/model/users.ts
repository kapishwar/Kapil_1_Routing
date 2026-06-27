export interface IUser{
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    role: string;
    img: string;
}

export interface Ires<T>{
    msg:string;
    data:T
}