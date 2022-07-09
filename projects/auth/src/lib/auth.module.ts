import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
