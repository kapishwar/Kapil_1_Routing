import { Injectable } from '@angular/core';
import { Ipro } from '../model/products';
import { Observable, of } from 'rxjs';
import { Ires } from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

PRODUCTS : Ipro[] = [
  {
    id: '1',
    name: 'iPhone 15',
    category: 'Mobile',
    price: 79999,
    stock: 15,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLRRAGLXE6wGKfPb4yjkA1Ymk2heuMxZ2UWRtey2CuQ&s=10'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    category: 'Mobile',
    price: 74999,
    stock: 10,
    rating: 4.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCkcQlUOdd8YKuddhEsp5CdZma0thXo9FKDFFOZv02g&s=10'
  },
  {
    id: '3',
    name: 'Dell Inspiron 15',
    category: 'Laptop',
    price: 65999,
    stock: 8,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA8wuOds5pPrdeCzE9ktJp3st7Tz4U6GQtEGK4pgH3w&s'
  },
  {
    id: '4',
    name: 'HP Pavilion',
    category: 'Laptop',
    price: 58999,
    stock: 12,
    rating: 4.4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4nCgqbYZcmXa7bNXdFCW-s9WsfYCeZdZbOI-xXETJA&s=10'
  },
  {
    id: '5',
    name: 'Sony Headphones',
    category: 'Accessories',
    price: 4999,
    stock: 25,
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtYMM7xoZtTcKRt1OT8N6g2xsisiZem94a7vigci7rw&s'
  },
  {
    id: '6',
    name: 'Boat Smart Watch',
    category: 'Wearable',
    price: 2999,
    stock: 30,
    rating: 4.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sNnyRYUelcUOuTHbOH59CnYIGyftz-oVyFDLRHHodw&s=10'
  }
];

  constructor() { }


  fetchapicall() : Observable<Ipro[]>{
    return of(this.PRODUCTS)
  }

  findobj(proid : string): Observable<Ipro> {
    let findobj = this.PRODUCTS.find(t=> t.id === proid)!

    return of(findobj)
  }


  Removeproduct(proid:string){
    let rid = this.PRODUCTS.findIndex(t => t.id === proid)
    this.PRODUCTS.splice(rid,1)
  }

  Postapicall(proobj : Ipro):Observable<Ires<Ipro>>{
    this.PRODUCTS.unshift(proobj)

    return of({
      msg:` ${proobj.name} product  is Created Successfully...`,
      data : proobj
    })
  }


  NewId(){
    return crypto.randomUUID()
  }

  FindEditObj(proid : string) :Observable<Ipro>{
    let eid = this.PRODUCTS.find( t => t.id === proid)!
    return of(eid)
  }

  UpdateProductapicall(pro:Ipro):Observable<Ires<Ipro>>{
    let uid = this.PRODUCTS.findIndex(t => t.id === pro.id)
    this.PRODUCTS[uid]=pro

    return of({
      msg:`${pro.name} is Updated Successfully...`,
      data:pro
    })
  }
}
