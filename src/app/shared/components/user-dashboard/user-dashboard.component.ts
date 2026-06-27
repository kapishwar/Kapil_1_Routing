import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _router : Router) { }

  UserArr !: IUser[]

  private Userserv = inject(UsersService)

  ngOnInit(): void {
    this.Fetchdata()
  }

  Fetchdata(){
    this.Userserv.fetchapicall()
    .subscribe({
      next:res=>{
        this.UserArr = res
        this._router.navigate(['/user', this.UserArr[0].id])
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }




}
