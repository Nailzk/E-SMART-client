import { Injectable } from '@angular/core';
import { UsersRepository } from 'communication';
import { IRegisterFormControl } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public get registerFormControls(): IRegisterFormControl[] {
    return [
      { name: 'login', placeHolder: 'Login', type: 'text' },
      { name: 'name', placeHolder: 'Name', type: 'text' },
      { name: 'surname', placeHolder: 'Surname', type: 'text' },
      { name: 'phoneNumber', placeHolder: 'Phone Number', type: 'tel' },
      { name: 'email', placeHolder: 'Email', type: 'email' },
    ];
  }

  constructor(private readonly _usersRepository: UsersRepository) {}

  public validateIsFieldExists(field: string, value: string): Observable<boolean> {
    return this._usersRepository.validateIsFieldExists(field, value);
  }
}
