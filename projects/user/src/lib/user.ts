import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthRepository, IUser, UsersRepository } from 'communication';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'notifier';
import { Observable, Subject } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class User {
  private _user: IUser | null;

  private _userChanges$ = new Subject<IUser | null>();

  public isAuthorized = false;

  public get id(): number {
    return this._user?.id ?? 0;
  }

  public get userInfo(): IUser | null {
    return this._user;
  }

  public get onUserChanges(): Subject<IUser | null> {
    return this._userChanges$;
  }

  private set user(val: IUser | null) {
    this._userChanges$.next(val);
    this._user = val;

    if (val) {
      this.isAuthorized = true;
    }
  }

  public get fullName(): string {
    return `${this.userInfo?.name || '--'} ${this.userInfo?.surname || '--'}`
  }

  constructor(
    private readonly _usersRepository: UsersRepository,
    private readonly _authRepository: AuthRepository,
    private readonly _notifier: NotifierService,
    private readonly _router: Router,
  ) {
    this.loadUser();
  }

  public loadUser() {
    return new Observable((subscriber) => {
      this._usersRepository
        .getMe()
        .pipe(untilDestroyed(this))
        .subscribe(
          (res) => {
            if (res) {
              this.user = res;
            }

            subscriber.complete();
          },
          (err) => {
            this._notifier.error(err);
            subscriber.error();
          },
        );
    });
  }

  public logOut(): void {
    this._authRepository.logout().subscribe(
      () => {
        this.user = null;
        this._notifier.success('Success')
        this._router.navigateByUrl('/home');
      },
      (err) => this._notifier.error(err),
    );
  }
}
