import { Injectable } from '@angular/core';
import { IRegisterFormControl } from './interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public get registerFormControls(): IRegisterFormControl[] {
    return [
      { name: 'name', placeHolder: 'Name' },
      { name: 'surname', placeHolder: 'Surname' },
      { name: 'phone', placeHolder: 'Phone Number' },
      { name: 'email', placeHolder: 'Email' },
      { name: 'password', placeHolder: 'Password' },
    ];
  }
  constructor() {}
}
