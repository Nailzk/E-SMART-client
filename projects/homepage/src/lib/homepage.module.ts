import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { HomepageSliderComponent } from './components/homepage-slider/homepage-slider.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SwiperModule } from 'swiper/angular';
import { HomepagePopularComponent } from './components/homepage-popular/homepage-popular.component';
import { HomepageBrandsComponent } from './components/homepage-brands/homepage-brands.component';
import { HomepageBrandsItemComponent } from './components/homepage-brands-item/homepage-brands-item.component';

@NgModule({
  declarations: [HomepageComponent, HomepageSliderComponent, HomepagePopularComponent, HomepageBrandsComponent, HomepageBrandsItemComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild([{ path: '', component: HomepageComponent }]),
    NzCarouselModule,
    NzButtonModule,
    SwiperModule
  ],
  exports: [HomepageComponent],
})
export class HomepageModule {}
