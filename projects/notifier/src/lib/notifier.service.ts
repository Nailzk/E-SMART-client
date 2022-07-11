import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({ providedIn: 'root' })
export class NotifierService {
  constructor(
    private readonly _notificationService: NzNotificationService,
    private readonly _translate: TranslateService,
  ) {}

  public success(message: string) {
    this._notificationService.success('Success', message);
  }

  public error(message: any) {
    let error = message;

    if (message?.error?.error) error = message.error.error;
    if (message?.error?.message) error = message.error.message;

    const local = this._translate.instant(error)

    this._notificationService.error('Error', local);
  }
}
