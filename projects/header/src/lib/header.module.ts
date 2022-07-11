import { NgModule } from '@angular/core';
import { NgxTranslateModule } from 'translate';
import { HeaderComponent } from './header.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgxTranslateModule,
    NzDropDownModule,
    RouterModule,
    FontAwesomeModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzDropDownModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
