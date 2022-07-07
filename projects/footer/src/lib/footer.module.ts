import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [FooterRoutingModule, CommonModule, FontAwesomeModule],
  exports: [FooterComponent],
})
export class FooterModule {}
