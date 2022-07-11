import { NgModule } from '@angular/core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgxTranslateModule } from 'translate';
import { NotifierService } from './notifier.service';

@NgModule({
  imports: [NzNotificationModule,NgxTranslateModule],
  providers: [NotifierService],
})
export class NotifierModule {}
