import { Ires, IUser } from './../model/users';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr :IUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    city: 'Hyderabad',
    role: 'Developer',
    img:'https://easydrawingguides.com/wp-content/uploads/2023/10/how-to-draw-zenitsu-agatsuma-from-demon-slayer-featured-image-1200-735x905.png' 
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543211',
    city: 'Bangalore',
    role: 'Tester',
    img:'https://preview.redd.it/what-demon-slayer-character-do-you-think-is-the-most-v0-vuwikarlx3le1.jpeg?width=675&format=pjpg&auto=webp&s=0c04dbaedf7a51bfeabf2f191f5bcaf7741c1f83' 
  
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '9876543212',
    city: 'Chennai',
    role: 'Manager',
    img:'https://i.pinimg.com/736x/21/92/70/2192704b176d387157676085180f83d6.jpg' 
  
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    phone: '9876543213',
    city: 'Mumbai',
    role: 'Designer',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ4Ew6CATdQV6OD9eGAGhzFD_b9ZnmtDbrM1O7ecgHyV-uSb0aHbL0Ul7&s=10' 
  
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david@example.com',
    phone: '9876543214',
    city: 'Pune',
    role: 'Developer',
    img:'https://cdn.shopify.com/s/files/1/0785/4004/6646/files/a3e3726397e74f84c77db9007ce12c83_480x480.jpg?v=1730562983' 
  
  }
];
  constructor() { }

  fetchapicall():Observable<Array<IUser>>{
    return of(this.usersArr)
  }

  validator(){
    return this.usersArr
  }

  findObj(uid : string):Observable<IUser>{
    let findobj = this.usersArr.find(t => t.id === uid)!
    return of(findobj)
  }

  RemoveUser(userid : string):Observable<string>{
    let rid = this.usersArr.findIndex(t => t.id === userid)
    this.usersArr.splice(rid,1)
    return of(userid)
  }

  NewId(){
    return crypto.randomUUID()
  }

  PostApi(usrobj : IUser): Observable<Ires<IUser>>{
    this.usersArr.unshift(usrobj)

    return of({
      msg:`New User is Created Successfully ...`,
      data:usrobj
    })
  }


  FindEditObj(userid : string) : Observable<IUser>{
    let eid = this.usersArr.find(e => e.id === userid)!
    return of(eid)
  }


  UpdateUser(userobj : IUser):Observable<Ires<IUser>>{
    let uid = this.usersArr.findIndex(t => t.id === userobj.id)
    this.usersArr[uid] = userobj

    return of({
      msg:`${userobj.name} is Updated Successfully...`,
      data:userobj
    })
  }
}
