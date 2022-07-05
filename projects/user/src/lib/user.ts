import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IUser, UsersRepository } from 'communication';
import { NotifierService } from 'notifier';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class User {
  public user: IUser;

  public isAuthorized = false;

  get id(): number {
    return this.user.id;
  }

  constructor(private readonly _usersRepository: UsersRepository, private readonly _notifier: NotifierService) {
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
              this.isAuthorized = true;
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
}
