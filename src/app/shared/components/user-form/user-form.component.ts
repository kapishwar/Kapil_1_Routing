import { Emailvalidators } from './../../validatorsfolder/emailvalidtion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlValidators } from '../../validatorsfolder/controlsvalidations';
import { IUser } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private userserv: UsersService,
    private snackbar: SnackBarService,
    private _router: Router,
    private routes: ActivatedRoute,
  ) {}

  isInEditMode: boolean = false;

  UserForm!: FormGroup;
  UserEditId !: string

  ngOnInit(): void {
    this.CreateFormControls();
    this.EditUser();
  }

  CreateFormControls() {
    this.UserForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(ControlValidators.email),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(ControlValidators.mobile),
      ]),
      city: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [
        Validators.required,
        Validators.pattern(ControlValidators.imgurl),
      ]),
    });
  }

  get control() {
    return this.UserForm.controls;
  }

  OnUserSubmit() {
    if (!this.UserForm.valid) {
      this.UserForm.markAllAsTouched();
    } else {
      let newuser: IUser = {
        ...this.UserForm.value,
        id: this.userserv.NewId(),
      };

      this.userserv.PostApi(newuser).subscribe({
        next: (res) => {
          this.snackbar.OpensnackBar(res.msg);
          this.UserForm.reset();
          this._router.navigate(['/user', newuser.id]);
          console.log(newuser);
        },
        error: (err) => {
          this.snackbar.OpensnackBar(err);
        },
      });
    }
  }

  EditUser() {
    if (this.routes.snapshot.params['id']) {
     this.UserEditId =  this.routes.snapshot.params['id']
      this.isInEditMode = true;
      this.userserv.FindEditObj(this.UserEditId).subscribe({
        next : res =>{
          this.UserForm.patchValue(res)

        },
        error:err=>{
          this.snackbar.OpensnackBar(err)
          
        }
      })
    
    }
  }



  UpdateUser(){
    let UpdateuuserObj : IUser = {
      ...this.UserForm.value,
      id:this.UserEditId
    }

    this.userserv.UpdateUser(UpdateuuserObj).subscribe({
      next:res=>{
        this.UserForm.reset()
        this.isInEditMode = false
        this._router.navigate(['/user', UpdateuuserObj.id])
        this.snackbar.OpensnackBar(res.msg)
      },
      error:err=>{
        this.snackbar.OpensnackBar(err)
      }
    })
  }


}
