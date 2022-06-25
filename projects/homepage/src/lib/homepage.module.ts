import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomepageComponent }])],
  exports: [HomepageComponent],
})
export class HomepageModule {}
