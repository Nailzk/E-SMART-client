import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from "swiper";

SwiperCore.use([Pagination,Navigation]);

@Component({
  selector: 'lib-homepage-slider',
  templateUrl: './homepage-slider.component.html',
  styleUrls: ['./homepage-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageSliderComponent {
  public swiperOptions: SwiperOptions = {
    cssMode: true,
    pagination: true,
    navigation: true
  }
}
