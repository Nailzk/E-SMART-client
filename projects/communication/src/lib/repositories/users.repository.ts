import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { HttpRepository } from '../http';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersRepository extends HttpRepository<IUser> {
  get _baseUrl(): string {
    return `${environment.authApiUrl}/users`;
  }

  public getMe(): Observable<IUser | undefined> {
    return this._http
      .get<IUser | undefined>(`${this._baseUrl}/me`, { ...this._httpOptions })
      .pipe(map((res) => this.transform(res)));
  }
}
