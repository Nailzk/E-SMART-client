import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpRepository } from '../http';
import { Observable } from 'rxjs';
import { ILogin, IRegister } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository extends HttpRepository<any> {
  get _baseUrl(): string {
    return `${environment.authApiUrl}/auth`;
  }

  public login(loginDto: ILogin): Observable<any> {
    return this._http.post(`${this._baseUrl}/login`, loginDto, { ...this._httpOptions });
  }

  public register(registerDto: IRegister): Observable<any> {
    return this._http.post(`${this._baseUrl}/register`, registerDto, { ...this._httpOptions });
  }

  public logout(): Observable<any> {
    return this._http.post(`${this._baseUrl}/logout`, {}, { ...this._httpOptions });
  }
}
