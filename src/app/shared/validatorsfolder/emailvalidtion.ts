import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { IUser } from '../model/users';
import { retry } from 'rxjs';

export class Emailvalidators {
  private Userserv = inject(UsersService);
  UserArr!: IUser[];
  Findobj!: IUser;

  EmailIsValid(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      if (!control.value) {
        return Promise.resolve(null);
      }

      const val = control.value as string;

      this.UserArr = this.Userserv.validator();

      return new Promise((resolve) => {
        const emailexist = this.UserArr.some(
          (t) => t.email.toLowerCase() === val,
        );

        if (emailexist) {
          resolve({
            error: 'Email is alredy exist',
          });
        } else {
          resolve(null);
        }
      });
    };
  }



}
