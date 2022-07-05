import { NgModule } from '@angular/core';
import { NgxTranslateModule } from 'translate';
import { HeaderComponent } from './header.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgxTranslateModule, NzDropDownModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
