import { NgModule } from '@angular/core';
import { NgxTranslateModule } from 'translate';
import { HeaderComponent } from './header.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgxTranslateModule, NzDropDownModule,RouterModule,FontAwesomeModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
