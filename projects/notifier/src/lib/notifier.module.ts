import { NgModule } from '@angular/core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NotifierService } from './notifier.service';

@NgModule({
  imports: [NzNotificationModule],
  providers: [NotifierService],
})
export class NotifierModule {}
