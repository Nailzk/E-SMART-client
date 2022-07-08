import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOrdersComponent } from './account-orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountOrdersComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AccountOrdersComponent }])],
})
export class AccountOrdersModule {}
