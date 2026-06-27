import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../model/users';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  userid!: string;
  UserObj!: IUser;
  UserArr !: IUser[]

  constructor(
    private _Routes: ActivatedRoute,
    private _router: Router,
    private Userserv: UsersService,
    private _dialogbox: MatDialog,
  ) {}

  ngOnInit(): void {
    this.FetcheditObj();
    this.Getdata()
  }


  Getdata(){
    this.Userserv.fetchapicall().subscribe({
      next:res=>{
        this.UserArr = res
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }


  FetcheditObj() {
    // this.userid = this._Routes.snapshot.params['id'];
    this._Routes.paramMap.subscribe({
      next: (res) => {
        this.userid = res.get('id')!;
        if (this.userid) {
          this.Userserv.findObj(this.userid).subscribe({
            next: (res) => {
              this.UserObj = res;
              console.log(this.userid);
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  OnRemove(userid: string) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = 'Are you sure to Remove this User';

    let mat = this._dialogbox.open(GetConfirmComponent, config);
    mat.afterClosed().subscribe((isconf) => {
      if (isconf === true) {
        this.Userserv.RemoveUser(userid).subscribe({
          next: (res) => {
            this._router.navigate(['user']);
            this._router.navigate(['/user' , this.UserArr[0].id])
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
