import { NgModule } from '@angular/core';

import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'header';
import { FooterModule } from 'footer';

registerLocaleData(en);

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
