import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountRouterModule } from './account-router.module';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRouterModule,
    FontAwesomeModule,
    CommonModule,
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
