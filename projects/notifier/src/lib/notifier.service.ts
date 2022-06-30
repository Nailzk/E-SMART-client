import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({ providedIn: 'root' })
export class NotifierService {
  constructor(private readonly _notificationService: NzNotificationService) {}

  public success(message: string) {
    this._notificationService.success('Success', message);
  }

  public error(message: any) {
    this._notificationService.error('Error', message);
  }
}
