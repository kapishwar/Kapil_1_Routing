export interface Ipro{
      id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    image: string;
}

export interface Ires<T>{
  msg:string;
  data:T
}