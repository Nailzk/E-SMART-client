import { NgModule } from '@angular/core';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [FooterRoutingModule],
  exports: [FooterComponent],
})
export class FooterModule {}
